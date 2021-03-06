import React from "react";
import { Route, Redirect } from "react-router-dom";
import Session from "../core/session";

// 实现身份验证
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !!Session.isAuthSession() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location
            }
          }}
        />
      )
    }
  />
);

export default AuthRoute;
