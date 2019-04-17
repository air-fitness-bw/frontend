import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { login, signUp } from "./actions";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ClientHomepage from "./components/ClientHomepage";
import InstructorHomepage from "./components/InstructorHomepage";
import AddClass from "./components/AddClass";
import FindClass from "./components/FindClass";
import { newClass } from "./components/data";
import MySchedule from "./components/MySchedule";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySchedule: [
        {
          id: 0,
          instructor: "John Doe",
          name: "Free Running",
          schedule: "Fridays at 6PM",
          location: "Canyon Park"
        }
      ]
    };
  }
  addToSchedule = id => {
    const newSchedule = newClass.find(item => {
      return item.id === id;
    });
    if (this.state.mySchedule.find(item => item.id === id)) {
      alert("class is already on schedule");
    } else {
      this.setState({
        ...this.state,
        mySchedule: [...this.state.mySchedule, newSchedule]
      });
    }
  };
  render() {
    console.log(this.state.mySchedule);
    return (
      <div className="App">
        <Route
          path="/app/login"
          render={props => <Login {...props} login={this.props.login} />}
        />
        <Route
          path="/app/signup"
          render={props => <SignUp {...props} signUp={this.props.signUp} />}
        />
        <Route path="/app/client-page" component={ClientHomepage} />
        <Route path="/app/instructor-page" component={InstructorHomepage} />
        <Route path="/app/create-class" component={AddClass} />
        <Route
          path="/app/find-class"
          render={props => (
            <FindClass
              addToSchedule={this.addToSchedule}
              {...props}
              classes={newClass}
            />
          )}
        />
        <Route
          path="/app/my-schedule"
          render={props => (
            <MySchedule schedule={this.state.mySchedule} {...props} />
          )}
        />
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
