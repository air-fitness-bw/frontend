import React from "react";
import "./schedule-card.css";

const ScheduleCard = ({ schedule }) => {
  return (
    <div className="schedule-card">
      <h2>{schedule.instructor}</h2>
      <h3>{schedule.name}</h3>
      <p>{schedule.schedule}</p>
      <p>{schedule.location}</p>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
};
export default ScheduleCard;
