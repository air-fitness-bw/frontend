import React from "react";
import InstructorHeader from "./InstructorHeader";
import "./client-homepage.css";
import Footer from "./Footer";
class InstructorHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <InstructorHeader welcome="Welcome Instructor!" />
        <div className="button-container">
          <button
            onClick={() => this.props.history.push("/app/create-class")}
            className="blue-button"
          >
            Create a Class
          </button>
          <button
            onClick={() => this.props.history.push("/app/my-classes")}
            className="orange-button"
          >
            Edit/Delete Class
          </button>
          <button className="darkblue-button">Create a Punchpass</button>
        </div>
        <div className="button-container2">
          <button className="blue-button">Class Schedule</button>
          <button className="orange-button">Add Clients to Class</button>
          <button className="darkblue-button">Attendance</button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default InstructorHomepage;
