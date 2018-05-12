import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../navigation';
import LandingPage from '../landing';
import SignUpPage from '../signup';
import SignInPage from '../signin';
import PasswordForgetPage from '../forgetPassword';
import HomePage from '../home';
import List from '../List';
import ListItem from '../ItemListComponent';
import AccountPage from '../account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

const App = () =>
  <Router>
    <div className="app">
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.LIST} component={() => <List />} />
      <Route exact path={routes.ITEMLIST} component={() => <ListItem />}/>

      <hr/>

    </div>
  </Router>

export default withAuthentication(App);