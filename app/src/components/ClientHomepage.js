import React from "react";
import ClientHeader from "./ClientHeader";
import "./client-homepage.css";
import Footer from "./Footer";

const ClientHomepage = props => {
  return (
    <div>
      <ClientHeader welcome="Welcome Client!" />
      <div className="button-container">
        <button
          onClick={() => props.history.push("/app/find-class")}
          className="blue-button"
        >
          Find a Class
        </button>
        <button className="orange-button">Purchase a Punchpass</button>
        <button
          onClick={() => props.history.push("/app/my-schedule")}
          className="darkblue-button"
        >
          My Schedule
        </button>
      </div>
      <div className="button-container2">
        <button className="blue-button">Class Schedule</button>
        <button className="orange-button">Add Clients to Class</button>
        <button className="darkblue-button">Attendance</button>
      </div>
      <Footer />
    </div>
  );
};
export default ClientHomepage;

// class ClientHomepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>
//         <ClientHeader welcome="Welcome Client!" />
//         <div className="button-container">
//           <button
//             onClick={() => this.props.history.push("/app/find-class")}
//             className="blue-button"
//           >
//             Find a Class
//           </button>
//           <button className="orange-button">Purchase a Punchpass</button>
//           <button
//             onClick={() => this.props.history.push("/app/my-schedule")}
//             className="darkblue-button"
//           >
//             My Schedule
//           </button>
//         </div>
//         <div className="button-container2">
//           <button className="blue-button">Class Schedule</button>
//           <button className="orange-button">Add Clients to Class</button>
//           <button className="darkblue-button">Attendance</button>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }
// export default ClientHomepage;
