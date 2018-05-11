import React from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../firebase/index';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

const SignOutButton = () =>
	<div>
	  <style type="text/css">
	  	{`
	    .btn-custom {
	        margin-top: 8pt;
	        background-color: #c4d18b;
	        color: white;
	    }
	    `}
	  </style>
	  <Button color="link" bsStyle="custom"
	    onClick={auth.doSignOut}
	  >	
	    Sign Out
	  </Button>
  </div>

export default SignOutButton;