import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        {/* <div>
          <NavLink>Find a Class</NavLink>
        </div> */}
        {/* <div>
          <NavLink activeClassName="selected" to="/app/login">
            Log In
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink activeClassName="selected" to="/app/signup">
            Join Now
          </NavLink>
        </div> */}
        <div>
          <NavLink activeClassName="selected" to="/app/instructor-page">
            Instructors
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="selected" to="/app/client-page">
            Clients
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="selected" exact to="/">
            Log Out
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
