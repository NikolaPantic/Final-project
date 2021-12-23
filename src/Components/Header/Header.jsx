import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Dino } from "../../App";
function Header() {
  const properties = useContext(Dino);

  function logout() {
    sessionStorage.removeItem("token");
    properties.setToken(sessionStorage.getItem("token"));
  }

  return (
    <div className="header">
      <img className="header-logo" src=""></img>
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
