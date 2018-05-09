import React from 'react';
/*import Button from 'react-bootstrap/lib/button';*/

import { auth } from '../firebase/index';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
