import React from "react";
import MainHeader from "./MainHeader";
import NewClass from "./NewClass";
import Footer from "./Footer";
import "./new-class.css";
const FindClass = props => {
  return (
    <div>
      <MainHeader welcome="Join a New Class" />
      <div className="search-container">
        <input
          className="search-bar"
          type="search"
          placeholder=" search by zipcode"
          name="search"
        />
        <button>Search</button>
      </div>
      {props.classes.map(newClass => {
        return (
          <NewClass
            addToSchedule={props.addToSchedule}
            key={newClass.id}
            classDetails={newClass}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default FindClass;
