import React, { Component } from 'react';

import { auth } from '../firebase/index';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sedgwick Ave Display:300,400,700', 'sans-serif', 'cursive'],
    families: ['Shadows Into Light:300,400,700', 'sans-serif', 'cursive']   
   
  }
});


const hStyle = {
  fontFamily: "Shadows Into Light" ,
  fontSize: 20
};

const pStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 50,
  textAlign: 'center'
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form style={hStyle} onSubmit={this.onSubmit}>
        <input 
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
        />
        <button style={hStyle}disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;