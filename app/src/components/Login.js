import React from "react";
import barbell from "../images/barbel.png";
import { Link } from "react-router-dom";
import "./login.css";
import Header from "./Header";
import Footer from "./Footer";

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
        <div className="login-form">
          <form onSubmit={this.onSubmit}>
            <div className="img-container">
              <img src={barbell} alt="barbell" />
            </div>
            <input
              onChange={this.onChange}
              type="text"
              placeholder=" Email"
              name="username"
              autoComplete="username"
              value={this.state.credentials.username}
            />
            <br />
            <input
              autoComplete="current-password"
              onChange={this.onChange}
              type="password"
              placeholder=" Password"
              name="password"
              value={this.state.credentials.password}
            />
            <br />
            <div className="button-wrapper">
              <button type="submit">LOGIN</button>
              <p>
                Not a Member? <Link to="/app/signup">Join Now</Link>
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
