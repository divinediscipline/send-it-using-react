import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import store from '../../store';
import { setIsAuthenticated } from '../../actions/authAction.js';
import '../../styles/styles.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShippingFast,
  faLock,
  faMap,
  faFighterJet,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../HomePage/HomePage';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../SignIn/SignIn';

if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  console.log('decodedToken', decodedToken);
  if (decodedToken) {
    store.dispatch(setIsAuthenticated(decodedToken));
  }
}

library.add(faShippingFast, faLock, faMap, faFighterJet, faPlus);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
