import React, { createContext, useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import CreateReport from "./Pages/CreateReport/CreateReport";
import Login from "./Pages/Login/Login";
import SinglePage from "./Pages/SinglePage/SinglePage";
import ReportPage from "./Pages/ReportPage/ReportPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.css";

export const Dino = createContext();

function App() {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [token, setToken] = useState(
    sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null
  );
  const [modal, setModal] = useState(false);
  const [singleCandidate, setSingleCandidate] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) =>
        setCandidates(
          res.map((e, i) => {
            return {
              ...e,
              avatar: `https://randomuser.me/api/portraits/men/${i + 19}.jpg`,
            };
          })
        )
      );
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((res) => setReports(res));
  }, []);

  return (
    <div className=".app">
      <Switch>
        <Dino.Provider value={{ reports, token, candidates, setToken }}>
          <Route exact path="/">
            <HomePage singleCandidate={setSingleCandidate}></HomePage>
          </Route>

          <Route path="/login">
            {token == null ? (
              <Login />
            ) : (
              <Redirect to="/reportpage">
                <ReportPage></ReportPage>
              </Redirect>
            )}
          </Route>

          <Route path="/candidate/:id">
            <SinglePage reports={reports}></SinglePage>
          </Route>

          <Route path="/createreport">
            {token != null ? (
              <CreateReport></CreateReport>
            ) : (
              <Redirect to="/login">
                <Login />
              </Redirect>
            )}
          </Route>

          <Route path="/reportpage">
            {token != null ? (
              <ReportPage />
            ) : (
              <Redirect to="/login">
                <Login />
              </Redirect>
            )}
          </Route>
        </Dino.Provider>
      </Switch>
    </div>
  );
}

export default App;
