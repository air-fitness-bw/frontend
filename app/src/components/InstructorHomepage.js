import React from "react";
import MainHeader from "./MainHeader";
import "./client-homepage.css";
class InstructorHomepage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader welcome="Welcome Instructor!" />
        <div className="button-container">
          <button className="blue-button">Create a Class</button>
          <button className="orange-button">Edit/Delete Class</button>
          <button className="darkblue-button">Create a Punchpass</button>
        </div>
        <div className="button-container2">
          <button className="blue-button">Class Schedule</button>
          <button className="orange-button">Add Clients to Class</button>
          <button className="darkblue-button">Attendance</button>
        </div>
      </div>
    );
  }
}
export default InstructorHomepage;
