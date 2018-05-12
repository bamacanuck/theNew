import React from 'react';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sedgwick Ave Display:300,400,700', 'sans-serif', 'cursive']
   
  }
});


const hStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 100
};

const pStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 50,
  textAlign: 'center'
};

const LandingPage = () =>
  <div className="jumbotron">
    <h1 style ={hStyle}>Shopin!</h1>
    <p style={pStyle}> Make a list, share it with others...</p>
  </div>

export default LandingPage;
