import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { login, signUp } from "./actions";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ClientHomepage from "./components/ClientHomepage";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/app/login" component={Login} />
        <Route path="/app/signup" component={SignUp} />
        <Route path="/app/client-page" component={ClientHomepage} />
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
