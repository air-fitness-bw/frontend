import React from "react";
import "./new-class.css";

const NewClass = ({ classDetails, addToCart, history }) => {
  function GetFormattedDate(date) {
    let todayTime = new Date(date);
    let month = todayTime.getMonth() + 1;
    let day = todayTime.getDate();
    let year = todayTime.getFullYear();
    return month + "/" + day + "/" + year;
  }
  const getId = () => {
    addToCart(classDetails.id);
    history.push("/app/purchase-class");
  };
  return (
    <div className="class-card">
      <h2>{classDetails.instructor}</h2>
      <h3>{classDetails.name}</h3>
      <h4>${classDetails.price}</h4>
      <div className="class-details">
        <p>
          <span className="title">Starts: </span>
          <span className="subtitle">
            {GetFormattedDate(classDetails.start_date)}
          </span>
        </p>
        <p>
          <span className="title">Schedule: </span>
          <span className="subtitle">{classDetails.schedule}</span>
        </p>
        <p>
          <span className="title">Location: </span>
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
          <button onClick={getId}>Buy PunchPass</button>
          {/* <button onClick={() => history.push("/app/purchase-class")}>
            Checkout
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default NewClass;
