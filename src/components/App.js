import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
// import AddUser from "../pages/userslist/AddUser";
// import UserDetails from "../pages/userslist/UserDetails";
// import UserList from "../pages/userslist/UserList";
import { useUserState } from "../context/UserContext";
// import { UsersContextProvider } from "../context";
// import UserEdit from "../pages/userslist/UserEdit";
export default function App() {
  // const users = [{ id: 1, name: "John" }, { id: 2, name: "Joanna" }];



  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
       
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
