import React, { useContext, createContext, useState, useEffect } from "react";
import "./homepage.css";
import Header from "../../Components/Header/Header.jsx";
import Search from "../../Components/Search/Search.jsx";
import Card from "../../Components/Card/Card.jsx";
import { Link } from "react-router-dom";
import { Dino } from "../../App";

export const Cardimg = createContext();

function HomePage() {
  const x = useContext(Dino);
  const [searchInput, setSearchinput] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  const searchItems = (searchValue) => {
    setSearchinput(searchValue);
  };

  useEffect(() => setFilteredCandidates(x.candidates), [x.candidates]);

  const searchResult = filteredCandidates.map((e) => e.name.toLowerCase());

  console.log(searchResult.filter((e) => e.includes(searchInput)));

  return (
    <div className="home-page">
      <Header></Header>
      <div className="home-page-container">
        <div className="candidates-and-search">
          <h3>Candidates</h3>
          <Search
            candidates={filteredCandidates}
            searchItems={searchItems}
          ></Search>
        </div>
        <div className="card-wrapper">
          {filteredCandidates.map((e, i) => (
            <Cardimg.Provider value={{ i, e }}>
              <Link
                key={e.id}
                className="single-card-link"
                to={`/candidate/${e.id}`}
              >
                <Card></Card>
              </Link>
            </Cardimg.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
