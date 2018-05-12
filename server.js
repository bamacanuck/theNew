
//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mysql");
const routes = require("./routes/api_routes");

//SETUP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 8080;

//Require the models for syncing 
var db = require("./models");
app.use(express.static(process.cwd() + '/public'));


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
//app.use(express.static("public"));

// Add routes, both API and view
app.use(routes);

//app.use(express.static(process.cwd() + '/public'));

// Connect to the SQL DB
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}).catch(function(err) {
 
  console.log(err, "Something went wrong with the Database Update!")

});

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
