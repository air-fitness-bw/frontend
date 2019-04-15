import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { login, signUp } from "./actions";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div>
            <NavLink>Find a Class</NavLink>
          </div>
          <div>
            <NavLink to="/app/login">Log In</NavLink>
          </div>
          <div>
            <NavLink to="/app/signup">Join Now</NavLink>
          </div>
        </nav>
        <Route path="/app/login" component={Login} />
        <Route path="/app/signup" component={SignUp} />
        {/* <Login />
        <SignUp /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { login, signUp }
)(App);
