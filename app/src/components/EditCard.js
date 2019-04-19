import React from "react";
import "./schedule-card.css";

const EditCard = ({ classes }) => {
  return (
    <div className="schedule-card">
      <h2>{classes.instructor}</h2>
      <h3>{classes.name}</h3>
      <p>{classes.schedule}</p>
      <p>{classes.location}</p>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
};
export default EditCard;
