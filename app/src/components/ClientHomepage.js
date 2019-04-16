import React from "react";
import MainHeader from "./MainHeader";
import "./client-homepage.css";

class ClientHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader welcome="Welcome Client!" />
        <div className="button-container">
          <button
            onClick={() => this.props.history.push("/app/find-class")}
            className="blue-button"
          >
            Find a Class
          </button>
          <button className="orange-button">Purchase a Punchpass</button>
          <button className="darkblue-button">My Schedule</button>
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
export default ClientHomepage;
