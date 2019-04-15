import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

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
          <label>Choose Your Profile Type: </label>
          <br />
          <select required>
            <option />
            <option value="instructor">Instructor</option>
            <option value="client">Client</option>
          </select>
          <br />
          <button type="submit">JOIN NOW</button>
          <p>
            Already a member? <Link>Log In</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default SignUp;
