import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));
const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </Router>,
  document.getElementById("root")
);
