import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./login.css";
import Footer from "./Footer";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }
  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Header banner="Welcome to Air fitness!" />
        <div className="login-form">
          <form>
            <input
              type="text"
              onChange={this.onChange}
              placeholder=" Your Name"
              name="name"
            />
            <br />
            <input
              type="email"
              onChange={this.onChange}
              placeholder=" Email"
              name="username"
            />
            <br />
            <input
              type="password"
              onChange={this.onChange}
              placeholder=" Password"
              name="password"
            />
            <br />
            <label className="profile-choice">Choose Your Profile Type: </label>
            <br />
            <select className="select-option" required>
              <option />
              <option value="instructor">Instructor</option>
              <option value="client">Client</option>
            </select>
            <br />
            <div className="button-wrapper">
              <button type="submit">JOIN NOW</button>
              <p>
                Already a member? <Link to="/app/login">Log In</Link>
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
