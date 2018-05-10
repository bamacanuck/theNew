import React from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../firebase/index';

const SignOutButton = () =>
  <Button color="link"
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>

export default SignOutButton;
