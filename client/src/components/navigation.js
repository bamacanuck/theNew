import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { Link } from 'react-router-dom';

import AuthUserContext from './Session/AuthUserContext';
import SignOutButton from './signout';
import * as routes from '../constants/routes';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    
    families: ['Shadows Into Light:300,400,700', 'sans-serif', 'cursive']
  }
});


const liStyle = {
  fontFamily: "Shadows Into Light" ,
  fontSize: 40
};

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <Navbar>
  <Navbar.Header >
    <Navbar.Brand>
      <a href="#home"></a>
    </Navbar.Brand>
  </Navbar.Header>
   <Nav>
   <li style ={liStyle}><SignOutButton /></li>
    <li class = "nav-item nav-fill" style ={liStyle}><Link to={routes.LANDING}>Landing</Link></li>
    <li class = "nav-item nav-fill" style ={liStyle}><Link to={routes.ACCOUNT}>Account</Link></li>
    <li class = "nav-item nav-fill" style ={liStyle}><Link to={routes.ITEMLIST}>Your List</Link></li>
    
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

    <li class nav-item style ={liStyle}><Link to={routes.LANDING}>Landing</Link></li>
    <li class nav-item style ={liStyle}><Link to={routes.SIGN_IN}>Sign In</Link></li>
  
     </Nav>
</Navbar>;
export default Navigation;
