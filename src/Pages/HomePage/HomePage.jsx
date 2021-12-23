import React, { useContext } from "react";
import "./homepage.css";
import Header from "../../Components/Header/Header.jsx";
import Search from "../../Components/Search/Search.jsx";
import Card from "../../Components/Card/Card.jsx";
import { Link } from "react-router-dom";
import { Dino } from "../../App";

function HomePage() {
  const x = useContext(Dino);

  return (
    <div className="home-page">
      <Header></Header>
      <div className="home-page-container">
        <div className="candidates-and-search">
          <h3>Candidates</h3>
          <Search></Search>
        </div>
        <div className="card-wrapper">
          {x.candidates.map((e) => (
            <Link
              key={e.id}
              className="single-card-link"
              to={`/candidate/${e.id}`}
            >
              <Card data={e}></Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
