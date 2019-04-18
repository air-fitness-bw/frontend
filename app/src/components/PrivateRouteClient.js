import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteClient = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          // redirect to login
          return <Redirect to="/app/login" />;
        }
      }}
    />
  );
};
export default PrivateRouteClient;
