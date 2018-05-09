'use strict';
let express = require('express');
let db = require('../models');
//let app_routes = require('express').Router();

var app_routes = express.Router();



app_routes.get("/api/addItem/", function(req, res)
{
    // Did we hit the route?
    console.log("We are in the api_routes/addItem route.");
    res.send("hey, you - this is the addItem api route");
});

app_routes.get("/api/editItem/", function(req, res)
{
    // Did we hit the route?
    console.log("We are in the api_routes/editItem route.");
    res.send("hey, you - this is the editItem api route");
});

app_routes.get("/api/deleteItem/", function(req, res)
{
    // Did we hit the route?
    console.log("We are in the api_routes/deleteItem route.");
    res.send("hey, you - this is the deleteItem api route");
});

   


/*
    scrapeRouter.get("/", function(req,res)
{
    // Grab every document in the Articles collection
    console.log("I'm in the get(articles route");
    db.Article.find({})
        .then(function(dbArticle) {
            //console.log(dbArticle);
            console.log("That's all the articles.");
            // If we were able to successfully find Articles, send them back 
            // to the client
            res.render("index",{dbArticle, title: "Think Progress Articles"}); 
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});
*/

   module.exports = app_routes; 