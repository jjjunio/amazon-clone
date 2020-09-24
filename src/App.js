import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // run once when app component loads
    //listener 
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS >>>>", authUser);

      if (authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })
  }, [])

  return (
    //Use BEM always!
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;



