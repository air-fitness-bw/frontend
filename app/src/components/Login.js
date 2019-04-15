import React from "react";
import barbell from "../images/barbel.png";
import { Link } from "react-router-dom";
import Header from "./Header";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }
  render() {
    return (
      <div>
        <Header banner="Welcome Back!" />
        <form>
          <div>
            <img src={barbell} alt="barbell" />
          </div>
          <input type="text" placeholder=" Email" name="username" />
          <br />
          <input type="password" placeholder=" Password" name="password" />
          <br />
          <button type="submit">Login</button>
          <p>
            Not a Member? <Link>Join Now</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default Login;
