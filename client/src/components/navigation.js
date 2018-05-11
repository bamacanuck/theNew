import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { Link } from 'react-router-dom';

import AuthUserContext from './Session/AuthUserContext';
import SignOutButton from './signout';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Shopin</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><Link to={routes.LIST}>itemList</Link></li>
    <li><SignOutButton /></li>
    </Nav>
</Navbar>;

const NavigationNonAuth = () =>

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Shopin</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>

    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  
     </Nav>
</Navbar>;
export default Navigation;
