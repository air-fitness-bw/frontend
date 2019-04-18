import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { login, signUp } from "./actions";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ClientHomepage from "./components/ClientHomepage";
import InstructorHomepage from "./components/InstructorHomepage";
import AddClass from "./components/AddClass";
import FindClass from "./components/FindClass";
import { newClass } from "./components/data";
import MySchedule from "./components/MySchedule";
import PurchaseClass from "./components/PurchaseClass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: newClass,
      mySchedule: [
        {
          id: 0,
          instructor: "John Doe",
          name: "Free Running",
          schedule: "Fridays at 6PM",
          location: "Canyon Park",
          passes: ""
        }
      ],
      cart: [],
      cartTotal: 0
    };
  }
  componentDidMount() {
    axios
      .get("https://airfitness-backend.herokuapp.com/api/class")
      .then(res => {
        this.setState({
          ...this.state,
          classList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addToSchedule = id => {
    const newSchedule = this.state.classList.find(item => {
      return item.id === id;
    });
    if (this.state.mySchedule.find(item => item.id === id)) {
      alert("class is already on schedule");
    } else {
      this.setState({
        ...this.state,
        mySchedule: [...this.state.mySchedule, newSchedule]
      });
    }
  };
  updateTotal = amount => {
    console.log(amount);
    this.setState(prevState => {
      console.log(prevState.cartTotal + amount);
      return {
        ...this.state,
        cartTotal: prevState.cartTotal + amount
      };
    });
  };
  addToCart = id => {
    const addItem = this.state.classList.find(item => {
      return item.id === id;
    });
    if (this.state.cart.find(item => item.id === id)) {
      alert("Class is already in your cart");
    } else {
      this.updateTotal(parseInt(addItem.price, 10));
      this.setState({
        cart: [...this.state.cart, addItem]
      });
    }
  };
  removeFromCart = id => {
    console.log(id);
    axios
      .delete(`https://airfitness-backend.herokuapp.com/api/class/${id}`)
      .then(res => {
        this.setState({
          ...this.state,
          classList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  addNewClass = classObj => {
    axios
      .post("https://airfitness-backend.herokuapp.com/api/class", {
        ...classObj,
        price: Number(classObj.price),
        instructor_id: Number(classObj.instructor_id)
      })
      .then(res => {
        this.setState({
          ...this.state,
          classList: res.data
        });
      })
      .catch(err => console.log(err.response));
  };
  render() {
    console.log("rendering", this.state.cartTotal);
    return (
      <div className="App">
        <Route
          path="/app/login"
          render={props => <Login {...props} login={this.props.login} />}
        />
        <Route
          path="/app/signup"
          render={props => <SignUp {...props} signUp={this.props.signUp} />}
        />
        <Route path="/app/client-page" component={ClientHomepage} />
        <Route path="/app/instructor-page" component={InstructorHomepage} />
        <Route
          path="/app/create-class"
          render={props => (
            <AddClass {...props} addNewClass={this.addNewClass} />
          )}
        />
        <Route
          path="/app/find-class"
          render={props => (
            <FindClass
              addToCart={this.addToCart}
              addToSchedule={this.addToSchedule}
              {...props}
              classes={this.state.classList}
            />
          )}
        />
        <Route
          path="/app/my-schedule"
          render={props => (
            <MySchedule schedule={this.state.mySchedule} {...props} />
          )}
        />
        <Route
          path="/app/purchase-class"
          render={props => (
            <PurchaseClass
              {...props}
              cartTotal={this.state.cartTotal}
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            />
          )}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { login, signUp }
)(App);
