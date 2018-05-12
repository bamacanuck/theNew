import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './signup';
import { PasswordForgetLink } from './forgetPassword';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Shadows Into Light:300,400,700', 'sans-serif', 'cursive'],
    families: ['Sedgwick Ave Display:300,400,700', 'sans-serif', 'cursive']   
  }
});

const hStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 60
};

const pStyle = {
  fontFamily: "Shadows Into Light" ,
  fontSize: 20
};

const SignInPage = ({ history }) =>
  <div className="jumbotron">
    <h1 style={hStyle}>Sign In</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          name = "email"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
          name = "password"
        />
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
