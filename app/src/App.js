import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import ClientHomepage from "./components/ClientHomepage";
import InstructorHomepage from "./components/InstructorHomepage";
import AddClass from "./components/AddClass";
import FindClass from "./components/FindClass";
import MySchedule from "./components/MySchedule";
import PurchaseClass from "./components/PurchaseClass";
import PrivateRouteClient from "./components/PrivateRouteClient";
import AxiosWithAuth from "./components/axiosWithAuth";
import EditClass from "./components/EditClass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: [],
      mySchedule: [],
      cart: [],
      cartTotal: 0,
      status: {
        user_id: "",
        loggedIn: false,
        role: ""
      }
    };
  }
  componentDidMount() {
    AxiosWithAuth()
      .get("https://airfitness-backend.herokuapp.com/api/class/all")
      .then(res => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          classList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  /////// Set up axios call to retrieve data from server
  getClassList = () => {
    axios
      .get("https://airfitness-backend.herokuapp.com/api/class/all")
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          classList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  /////// Decode token and return user role
  decode = token => {
    return jwt_decode(token).role;
  };
  ////// Decode token and return user_id
  decodeId = token => {
    return jwt_decode(token).subject;
  };

  //////// axios call sending credentials upon response add token to local storage
  //////// and update state with user info and loggedIN state
  signUpPromise = creds => {
    return axios
      .post("https://airfitness-backend.herokuapp.com/api/users/reg", creds)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        this.setState({
          ...this.state,
          status: {
            user_id: res.data.user_id,
            loggedIn: !this.state.status.loggedIn
          }
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  signUp = creds => {
    this.signUpPromise(creds).then(() => {
      if (this.decode(localStorage.getItem("token")) === "client") {
        this.loginPromise(creds).then(
          this.props.history.push("/app/client-page")
        );
      } else {
        console.log("Not a client");
        this.props.history.push("/app/instructor-page");
      }
    });
  };
  /////////// login functjion that takes in credentials and executes a axios promise
  /////////// with the credentials after promise resolves push user to the correct page
  ////////// based on their role

  login = creds => {
    this.loginPromise(creds).then(() => {
      if (this.decode(localStorage.getItem("token")) === "client") {
        this.loginPromise(creds).then(
          this.props.history.push("/app/client-page")
        );
      } else {
        console.log("Not a client");
        this.props.history.push("/app/instructor-page");
      }
    });

    // this.loginPromise(creds).then(this.props.history.push("/app/client-page"));
  };
  loginPromise = creds => {
    return axios
      .post("https://airfitness-backend.herokuapp.com/api/users/login", creds)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        // this.decode(localStorage.getItem("token"));
        this.setState({
          ...this.state,
          status: {
            user_id: res.data.user_id,
            loggedIn: !this.state.status.loggedIn
          }
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  // addToSchedule = id => {
  //   this.addToSchedulePromise(id).then(
  //     this.props.history.push("/app/my-schedule")
  //   );
  // };

  addToSchedulePromise = id => {
    // console.log(this.state.cart);
    // const newItem = this.state.cart.find(item => {
    //   return item.id === id;
    // });
    // console.log(newItem);

    return AxiosWithAuth()
      .post("https://airfitness-backend.herokuapp.com/api/punch", {
        user_id: this.decodeId(localStorage.getItem("token")),
        class_name: id
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  addToSchedule = id => {
    console.log(id);
    this.addToSchedulePromise(id).then(
      this.props.history.push("/app/my-schedule")
      // AxiosWithAuth()
      //   .get("https://airfitness-backend.herokuapp.com/api/punch")
      //   .then(res => {
      //     this.setState({
      //       ...this.state,
      //       schedule: [...this.state.mySchedule, res.data]
      //     });
      //   })
      //   .catch(err => console.log(err.response))
    );
  };
  updateTotal = amount => {
    this.setState(prevState => {
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
  removeClass = id => {
    this.removeClassPromise(id).then(
      AxiosWithAuth()
        .get("https://airfitness-backend.herokuapp.com/api/class/all")
        .then(res => {
          this.setState({
            ...this.state,
            classList: res.data
          });
        })
        .catch(err => console.log(err.response))
    );
  };
  removeClassPromise = id => {
    return AxiosWithAuth()
      .delete(`https://airfitness-backend.herokuapp.com/api/class/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  addNewClass = classObj => {
    AxiosWithAuth()
      .post("https://airfitness-backend.herokuapp.com/api/class", classObj)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          classList: res.data
        });
      })
      .catch(err => console.log(err.response));
  };
  render() {
    return (
      <div className="App">
        <Route
          path="/app/login"
          render={props => <Login {...props} login={this.login} />}
        />
        <Route
          path="/app/signup"
          render={props => <SignUp {...props} signUp={this.signUp} />}
        />
        {/* <Route path="/app/client-page" component={ClientHomepage} /> */}
        <PrivateRouteClient
          exact
          path="/app/client-page"
          component={ClientHomepage}
          getClassList={this.getClassList}
        />
        <PrivateRouteClient
          exact
          path="/app/instructor-page"
          component={InstructorHomepage}
        />
        {/* <Route path="/app/instructor-page" component={InstructorHomepage} /> */}
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
              removeClass={this.removeClass}
            />
          )}
        />
        <Route
          path="/app/my-schedule"
          render={props => (
            <MySchedule
              removeClass={this.removeClass}
              schedule={this.state.mySchedule}
              {...props}
            />
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
              addToSchedule={this.addToSchedule}
            />
          )}
        />
        <Route path="/app/my-classes" component={EditClass} />
      </div>
    );
  }
}

export default App;
