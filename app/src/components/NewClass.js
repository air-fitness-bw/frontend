import React from "react";
import "./new-class.css";
const NewClass = ({ classDetails }) => {
  return (
    <div className="class-card">
      <h2>{classDetails.instructor}</h2>
      <h3>{classDetails.name}</h3>
      <h4>${classDetails.price}</h4>
      <div className="class-details">
        <p>
          <span className="title">Start Date: </span>{" "}
          <span className="subtitle">{classDetails.startDate}</span>
        </p>
        <p>
          <span className="title">Weekly Schedule: </span>
          <span className="subtitle">{classDetails.schedule}</span>
        </p>
        <p>
          <span className="title">Class Location: </span>
          <span className="subtitle">{classDetails.location}</span>
        </p>
        <p>
          <span className="title">Zipcode: </span>{" "}
          <span className="subtitle">{classDetails.zipcode}</span>
        </p>
        <div className="class-description">
          <br />
          <span className="title">Description: </span>
          <br />
          <br />
          <span className="subtitle">{classDetails.description}</span>
        </div>
        <div className="add-class-button">
          <button>Join Class</button>
        </div>
      </div>
    </div>
  );
};
export default NewClass;
