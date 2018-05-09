import React from 'react';
// import Button from 'react-bootstrap/lib/button';

import { auth } from '../firebase/index';

const SignOutButton = () =>
  <button color="link"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
