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
  /////// API call to set state with data for all available classes when app loads
  componentDidMount() {
    AxiosWithAuth()
      .get("https://airfitness-backend.herokuapp.com/api/class/all")
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
  /////// Set up axios call to retrieve class data from server whenever function is called
  /////// and set state based on new data retrieved
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
  /////////// login function that takes in credentials and executes an axios promise
  /////////// with the credentials after the promise resolves it will push the user to the correct page
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
  };

  ///// This function returns an axios promise that will be used above

  loginPromise = creds => {
    return axios
      .post("https://airfitness-backend.herokuapp.com/api/users/login", creds)
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

  ////// this function returns a promise that will add classes to the
  ///// clients schedule the axios call is taking in the class_name and
  ///// user id which is decoded from the token received on login

  addToSchedulePromise = id => {
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

  /////// this function takes in the class_name as id and executes the axios promise
  /////// after it is resolved the user is pushed to the 'my-schedule' path

  addToSchedule = id => {
    console.log(id);
    this.addToSchedulePromise(id).then(
      this.props.history.push("/app/my-schedule")
    );
  };

  ///// this function takes in the cost of the class that has been recently added to the cart
  ///// and adds it to the current total of all items in the cart

  updateTotal = amount => {
    this.setState(prevState => {
      return {
        ...this.state,
        cartTotal: prevState.cartTotal + amount
      };
    });
  };
  ///// this function takes the id of the class selected from the
  //// 'purchase-class' page and adds them to the cart if the
  //// class is already in the cart the user will be alerted

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
  //// this function isn't used in the current deployment of the app
  //// but it takes in a class id and executes a promise, after the
  //// promise resolves another axios promise is chained to get a newly
  //// updated list of classes
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
  ///// this function returns a promise that will be used in a promise
  //// chain above
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
  //// this function takes in a class object that was created by an
  //// instructor and creates a new class, the axios response is then
  //// used to set state with the new list of classes returned.

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
