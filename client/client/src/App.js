import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import { Provider } from "react-redux";
import store from "./store";

import './App.css';
import Navbar from "./components/layout/Navbar";
import Sidenav from "./components/layout/Sidenav"
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/layout/Form"

// Checa token para mantener al usuario loggeado
if (localStorage.jwtToken) {
  // Setea el token para auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // COdifica el token y obtiene info de usuario
  const decoded = jwt_decode(token);
  // Setea el usuario si ya está autenticado
  store.dispatch(setCurrentUser(decoded));
// Checa la expiración del token
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    // Logout
    store.dispatch(logoutUser());
    // Redirecciona al login
    window.location.href = "./login";
  }
}

class App extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        <Sidenav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} /> 
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/form" component={Form} />
        </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
