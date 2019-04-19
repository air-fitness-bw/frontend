import React from "react";
import "./schedule-card.css";

const ScheduleCard = ({ schedule, removeClass }) => {
  return (
    <div className="schedule-card">
      <h2>{schedule.instructor}</h2>
      <h3>{schedule.class_name}</h3>
      <p>{schedule.schedule}</p>
      <p>{schedule.location}</p>
      <p>Punches Remaining: {schedule.uses}</p>
      <div>
        <button onClick={() => removeClass(schedule.id)}>Remove</button>
      </div>
    </div>
  );
};
export default ScheduleCard;
