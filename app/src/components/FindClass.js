import React from "react";
import MainHeader from "./MainHeader";
import NewClass from "./NewClass";
import Footer from "./Footer";

const FindClass = props => {
  return (
    <div>
      <MainHeader welcome="Join a New Class" />
      {props.classes.map(newClass => {
        return <NewClass key={newClass.id} classDetails={newClass} />;
      })}
      <Footer />
    </div>
  );
};
export default FindClass;
