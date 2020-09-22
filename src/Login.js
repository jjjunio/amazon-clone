import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";



function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //prevents page from refreshing
    e.preventDefault();

    //firebase login 
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      })
      .catch(error => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault();
    //firebase registration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/")
        }
      })
      .catch(error => alert(error.message))
  }


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>

          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn}
            className="login_signInButton">Sign In</button>

        </form>

        <p>
          By signing in you agree to Amazon FAKE CLONE's Conditions of Use & Sale. Please see our Privacy Notice, or Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register}
          className="login__registerButton">
          Create your Amazon Account
        </button>

      </div>
    </div >
  )
}

export default Login
