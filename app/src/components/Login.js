import React from "react";
import barbell from "../images/barbel.png";
import { Link } from "react-router-dom";
import Header from "./Header";

class Login extends React.Component {
  constructor(props) {
    super(props);
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
    this.props.login(this.state.credentials);
  };
  render() {
    console.log(this.state.credentials);
    return (
      <div>
        <Header banner="Welcome Back!" />
        <form onSubmit={this.onSubmit}>
          <div>
            <img src={barbell} alt="barbell" />
          </div>
          <input
            onChange={this.onChange}
            type="text"
            placeholder=" Email"
            name="username"
            value={this.state.credentials.username}
          />
          <br />
          <input
            onChange={this.onChange}
            type="password"
            placeholder=" Password"
            name="password"
            value={this.state.credentials.password}
          />
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
