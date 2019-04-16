import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { login, signUp } from "./actions";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ClientHomepage from "./components/ClientHomepage";
import InstructorHomepage from "./components/InstructorHomepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/app/login" component={Login} />
        <Route path="/app/signup" component={SignUp} />
        <Route path="/app/client-page" component={ClientHomepage} />
        <Route path="/app/instructor-page" component={InstructorHomepage} />
        {/* <Login />
        <SignUp /> */}
        {/* <NavBar /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { login, signUp }
)(App);
