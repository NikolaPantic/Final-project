import React, {useState, useContext } from "react";
import { Link} from "react-router-dom";
import "./login.css";
import { Dino } from "../../App";

function Login() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const x = useContext(Dino);
const[response, setResponse]=useState('')

const showMessage=()=>{

sessionStorage.setItem('token', response.accessToken)

sessionStorage.getItem("token") === "undefined"
 ? x.setToken(null) : x.setToken(sessionStorage.getItem("token"));


}


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
      .then(res=>setResponse(res))
      // .then((res) => sessionStorage.setItem("token", res.accessToken))
      // .then(() => {
      //   sessionStorage.getItem("token") === "undefined"
      //   ? x.setToken(null)
      //   : x.setToken(sessionStorage.getItem("token"));
      // })
      
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
<p className="login-message">{response==="Cannot find user"?response:''}
{response==="Email format is invalid"? response:''}</p>

      <p >Password</p>
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        onChange={(p) => {
          setPassword(p.target.value);
        }}
      />

      <p className="login-message">{response==="Incorrect password"? response:''}
      {response==="Email and password are required"?response:''}
      {response==="Password is too short"?response:''}</p>

      <button className="loginbutton" onClick={()=>{loginButton(); 
        showMessage()}}>
        LOG IN
      </button>
      <Link to="/">
        <button className="back">BACK</button>
      </Link>
    </div>
  );
}

export default Login;
