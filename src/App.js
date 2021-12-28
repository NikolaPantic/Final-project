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
  const [token, setToken] = useState(sessionStorage.getItem("token") !== "undefined" ? sessionStorage.getItem("token") : null);
  const [modal, setModal] = useState(false);
  const [modalperson, setModalPerson] = useState("");
  const [reportinfo, setReportInfo] = useState({});

  const [namecreate, setNameCreate] = useState("");
  const [idcreate, setIDCreate] = useState(null);
  const [companyname, setCompanyName] = useState("");
  const [companyID, setCompanyID] = useState(null);
  const [interviewdate, setInterviewDate] = useState("");
  const [interviewphase, setInterviewPhase] = useState("CV");
  const [status, setStatus] = useState("Select");
  const [notes, setNotes] = useState("");
  const [reportid, setReportID] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) => setCandidates(res));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((res) => setReports(res));
  }, [reports]);

  return (
    <div className="app">
      <Switch>
        <Dino.Provider
          value={{
            modal,
            reportinfo,
            modalperson,
            token,
            reports,
            candidates,
            interviewdate,
            interviewphase,
            status,
            notes,
            companyID,
            companyname,
            namecreate,
            idcreate,
            reportid,
            setNameCreate,
            setIDCreate,
            setCompanyID,
            setCompanyName,
            setInterviewDate,
            setInterviewPhase,
            setStatus,
            setNotes,
            setModalPerson,
            setReportInfo,
            setToken,
            setModal,
            setReportID,
          }}>
          <Route exact path="/">
            <HomePage></HomePage>
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
            <SinglePage></SinglePage>
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
