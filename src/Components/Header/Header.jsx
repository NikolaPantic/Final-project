import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Dino } from "../../App";
import tr from "./tr.svg";

function Header() {
  const properties = useContext(Dino);

  function logout() {
    sessionStorage.removeItem("token");
    properties.setToken(sessionStorage.getItem("token"));
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={tr} alt="logo"></img>
      </Link>
      {properties.token === null ? (
        <Link to="/login">
          <button>Login</button>
        </Link>
      ) : (
        <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link>
      )}
    </div>
  );
}

export default Header;
