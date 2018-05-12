import React from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../firebase/index';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Shadows Into Light:300,400,700', 'sans-serif', 'cursive'],
    families: ['Sedgwick Ave Display:300,400,700', 'sans-serif', 'cursive']   
   
  }
});


bootstrapUtils.addStyle(Button, 'custom');

const SignOutButton = () =>
	<div>
	  <style type="text/css">
	  	{`
	    .btn-custom {
	        margin: 4pt;
	        background-color: #c4d18b;
	        color: white;
	        font-size: 30px; 
	        font-family: 'Shadows Into Light'; 
	        font-weight: 'bold';

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