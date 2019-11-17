import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../home";
import Login from "../login";
import Register from "../register";
import Dashboard from "../dashboard";
import Profile from "../profile";
import PrivateRoute from "./PrivateRoute";
import { getSession } from "../../utils/auth";
import DefaultLayout from "../../layout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      loading: true
    };
  }
  componentDidMount() {
    const session = getSession();
    this.setState({ session: session, loading: false });
  }
  render() {
    if (!this.state.loading) {
      return (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
              layout={DefaultLayout}
              session={this.state.session}
            />
            <PrivateRoute
              exact
              path="/profile"
              component={Profile}
              layout={DefaultLayout}
              session={this.state.session}
            />
          </Switch>
        </Router>
      );
    } else {
      return null;
    }
  }
}

export default App;

//STEP 1: Our SPA application checks if a cookie with the JWT payload exists, if yes, the user has authenticated otherwise the SPA redirect to the /login page. If you are using a single httpOnly cookie, the SPA should make an API call, for instance, //backend/api/me to know who is the current user and get an unauthorized error if the authentication cookie (containing the JWT) is missing or invalid.
// STEP 2 — Option 1: the /login page on the front end asks for user credentials (login/password) and then posts them on the backend API using an AJAX request. The AJAX response will set the authentication cookie with a JWT inside.
