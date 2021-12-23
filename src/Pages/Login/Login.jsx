import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import { Dino } from "../../App";

function Login() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const x = useContext(Dino);

  const loginButton = () => {
    fetch(`http://localhost:3333/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: `${useremail}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem("token", res.accessToken))
      .then(() => {
        sessionStorage.getItem("token") === "undefined"
          ? x.setToken(null)
          : x.setToken(sessionStorage.getItem("token"));
      })
      .catch((e) => { 
        console.log(e.message);
      });
  };

  return (
    <div className="loginpage">
      <p>Username</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(u) => {
          setUseremail(u.target.value);
        }}
      />
      <p>Password</p>
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        onChange={(p) => {
          setPassword(p.target.value);
        }}
      />

      <button className="loginbutton" onClick={loginButton}>
        LOG IN
      </button>
      <Link to="/">
        <button className="back">BACK</button>
      </Link>
    </div>
  );
}

export default Login;
