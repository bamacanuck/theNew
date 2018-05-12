import React from 'react';

import AuthUserContext from './Session/AuthUserContext';
import { PasswordForgetForm } from './forgetPassword';
import PasswordChangeForm from './changepassword';
import withAuthorization from './Session/withAuthorization';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sedgwick Ave Display:300,400,700', 'sans-serif', 'cursive'],
    families: ['Shadows Into Light:300,400,700', 'sans-serif', 'cursive']   
   
  }
});


const hStyle = {
  fontFamily: "Shadows Into Light" ,
  fontSize: 30
};

const pStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 50,
  textAlign: 'center'
};


const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1 style = {hStyle}>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);