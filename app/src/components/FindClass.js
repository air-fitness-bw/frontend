import React from "react";
import ClientHeader from "./ClientHeader";
import NewClass from "./NewClass";
import Footer from "./Footer";
import "./new-class.css";
const FindClass = props => {
  return (
    <div>
      <ClientHeader welcome="Join a New Class" />
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
            history={props.history}
            addToCart={props.addToCart}
            removeClass={props.removeClass}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default FindClass;
