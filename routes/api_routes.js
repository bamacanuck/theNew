'use strict';
const express = require('express');
const db = require('../models');
const ListItem = require('../classes/ListItem.js');
const ItemList = require('../classes/ItemList.js');


var app_routes = express.Router();

let api_route_debug = false;



app_routes.get("/api/addItem/", function(req, res)
{
    let newListString = "";
    let recordExists = false;
    let itemListObject = new ItemList();
    let listItemObject = new ListItem(req.query.name);
    let failed = false;
    listItemObject.fromString(req.query);

    // Did we hit the route?
    if(api_route_debug)
    {
        console.log("\n\n");
        console.log("Line 22");
        console.log("We are in the api_routes/addItem route.");
        console.log("The query is");
        console.log(req.query);
        console.log("\nThe itemListObject data is");
        console.log(JSON.stringify(itemListObject, null, 2));
        console.log("\nThe listItemObject data is");
        console.log(JSON.stringify(listItemObject, null, 2));
        console.log("");

    }

    // Get the listItemObject from the incoming query
    

    // Get the (only) record out of the house table
    if(api_route_debug)
    {
        console.log("Doing db.house.findOne({})");
    }
    db.house.findOne({}).
    then(function(house)
    {
        if(house === null)
        {
            console.log("\n");
            console.log("db.house.findOne({}) returned NO records");
        } // End of if(api_route_debug)
        else
        {
            recordExists = true;
            console.log("house.theList is |" + house.theList + "|");
            console.log(house.theList);
            if(house.theList !== "")
            {
                itemListObject.fromString(house.theList);
            }
            if(api_route_debug)
            {
                console.log("\n");
                console.log("Line 47");
                console.log("db.house.findOne({})  returned")
                console.log("houseID: " + house.houseID);
                console.log("houseName: " + house.houseName);
                console.log("theList: |" + house.theList + "|");
            }
        }
    }). // End of then clause from line 34, db.house.findOne({}).
    catch(function (error)
    {
        console.log("db.house.findOne({}) FAILED.");
        failed = true;
        res.status(error.status || 500);
        res.send(error);
        return;
    
    }). // End of catch clause from line 34, db.house.findOne({}).

    then(function()
    {
        try
        {
            itemListObject.add(listItemObject);
            newListString = itemListObject.toString();

            if(api_route_debug)
            {
                console.log("\n");
                console.log("Line 85");
                console.log("We just added the item to the itemListObject");
                console.log("newListString is now");
                console.log(newListString);
                console.log("The itemListObject data is now:");
                console.log(JSON.stringify(itemListObject, null, 2));
            }
        }
        catch(error)
        {
            console.log("try to add the listItemObject to the itemListObject at line 81 FAILED.");
            failed = true;
            res.status(error.status || 500);
            res.send(error);
            console.log(error.status);
            console.log(error);
            return;
        }; // End of catch block from try at line 79

    }). // End of then clause from line 74

    catch(function(error)
    {
        console.log("try to add the listItemObject to the itemListObject at line 81 FAILED.");
            failed = true;
            res.status(error.status || 500);
            res.send(error);
            return;
    }). // End of catch(function(error) at line 101

    then(function()
    {
        if(failed === false)
        {
            db.house.update({theList: newListString},
            {
            where:
                {
                    houseID: "1234"
                }
            });
        }

        console.log("failed is " + failed);
        if(failed === false)
        {
            console.log("At the end.  newListString is");
            console.log(newListString);
            res.send(newListString);
        }
    }).
    catch(function(error)
    {
        console.log("db.house.update FAILED");
        failed = true;
        res.status(error.status || 500);
        res.send(error);
        return;
    });

    
  
}); // /End of app_routes.get("/api/addItem/", ...



app_routes.get("/api/editItem/", function(req, res)
{
    let newListString = "";
    let recordExists = false;
    let itemListObject = new ItemList();
    let listItemObject = new ListItem(req.query.name);
    listItemObject.fromString(req.query);
    let failed = false;

    // Did we hit the route?
    if(api_route_debug)
    {
        console.log("\n\n");
        console.log("Line 22");
        console.log("We are in the api_routes/editItem route.");
        console.log("The query is");
        console.log(req.query);
        console.log("\nThe itemListObject data is");
        console.log(JSON.stringify(itemListObject, null, 2));
        console.log("\nThe listItemObject data is");
        console.log(JSON.stringify(listItemObject, null, 2));
        console.log("");

    }

    // Get the listItemObject from the incoming query
    

    // Get the (only) record out of the house table
    if(api_route_debug)
    {
        console.log("Doing db.house.findOne({})");
    }
    db.house.findOne({}).
    then(function(house)
    {
        if(house === null)
        {
            console.log("\n");
            console.log("db.house.findOne({}) returned NO records");
        } // End of if(api_route_debug)
        else
        {
            recordExists = true;
            console.log("house.theList is |" + house.theList + "|");
            console.log(house.theList);
            if(house.theList !== "")
            {
                itemListObject.fromString(house.theList);
            }
            if(api_route_debug)
            {
                console.log("\n");
                console.log("Line 47");
                console.log("db.house.findOne({})  returned")
                console.log("houseID: " + house.houseID);
                console.log("houseName: " + house.houseName);
                console.log("theList: |" + house.theList + "|");
            }
        }
    }). // End of then clause from line 34, db.house.findOne({}).
    catch(function (error)
    {
        console.log("db.house.findOne({}) FAILED.");
        failed = true;
        res.status(error.status || 500);
        res.send(error);
        return;
    
    }). // End of catch clause from line 34, db.house.findOne({}).

    then(function()
    {
        try
        {
            
            itemListObject.setItemQuantity(req.query.name, req.query.quantity);
            newListString = itemListObject.toString();

            if(api_route_debug)
            {
                console.log("\n");
                console.log("Line 85");
                console.log("We just added the item to the itemListObject");
                console.log("newListString is now");
                console.log(newListString);
                console.log("The itemListObject data is now:");
                console.log(JSON.stringify(itemListObject, null, 2));
            }
        }
        catch(error)
        {
            console.log("try to edit the listItemObject to the itemListObject at line 81 FAILED.");
            failed = true;
            res.status(error.status || 500);
            res.send(error);
            return;
        }; // End of catch block from try at line 79

    }). // End of then clause from line 74

    catch(function(error)
    {
        console.log("try to edit the listItemObject to the itemListObject at line 81 FAILED.");
            
            return;
    }). // End of catch(function(error) at line 101

    then(function()
    {
        db.house.update({theList: newListString},
        {
        where:
            {
                houseID: "1234"
            }
        });

        if(failed === false)
        {
            res.send(newListString);
        }
    }).
    catch(function(error)
    {
        console.log("db.house.update FAILED");
        failed = true;
        res.status(error.status || 500);
        console.log("status code is "+ error.status);
        res.send(error);
        console.log("status message is "+ error)
        return;;
    });
  
}); // End of app_routes.get("/api/editItem/", ...

app_routes.get("/api/deleteItem/", function(req, res)
{
    let newListString = "";
    let recordExists = false;
    let itemListObject = new ItemList();
    let listItemObject = new ListItem(req.query.name);
    listItemObject.fromString(req.query);
    let failed = false;

    // Did we hit the route?
    if(api_route_debug)
    {
        console.log("\n\n");
        console.log("Line 22");
        console.log("We are in the api_routes/deleteItem route.");
        console.log("The query is");
        console.log(req.query);
        console.log("\nThe itemListObject data is");
        console.log(JSON.stringify(itemListObject, null, 2));
        console.log("\nThe listItemObject data is");
        console.log(JSON.stringify(listItemObject, null, 2));
        console.log("");

    }

    // Get the listItemObject from the incoming query
    

    // Get the (only) record out of the house table
    if(api_route_debug)
    {
        console.log("Doing db.house.findOne({})");
    }
    db.house.findOne({}).
    then(function(house)
    {
        if(house === null)
        {
            console.log("\n");
            console.log("db.house.findOne({}) returned NO records");
        } // End of if(api_route_debug)
        else
        {
            recordExists = true;
            console.log("house.theList is |" + house.theList + "|");
            console.log(house.theList);
            if(house.theList !== "")
            {
                itemListObject.fromString(house.theList);
            }
            if(api_route_debug)
            {
                console.log("\n");
                console.log("Line 47");
                console.log("db.house.findOne({})  returned")
                console.log("houseID: " + house.houseID);
                console.log("houseName: " + house.houseName);
                console.log("theList: |" + house.theList + "|");
            }
        }
    }). // End of then clause from line 34, db.house.findOne({}).
    catch(function (error)
    {
        console.log("db.house.findOne({}) FAILED.");
        failed = true;
        res.status(error.status || 500);
        res.send(error);
        return;
    
    }). // End of catch clause from line 34, db.house.findOne({}).

    then(function()
    {
        try
        {
        
            itemListObject.deleteItem(req.query.name);
            newListString = itemListObject.toString();
            console.log("After deleting, newListString is ");
            console.log(newListString);

            if(api_route_debug)
            {
                console.log("\n");
                console.log("Line 85");
                console.log("We just deleted the item to the itemListObject");
                console.log("newListString is now");
                console.log(newListString);
                console.log("The itemListObject data is now:");
                console.log(JSON.stringify(itemListObject, null, 2));
            }
        }
        catch(error)
        {
            console.log("In the catch at line 384 FAILED.");
            failed = true;
            res.status(error.status || 500);
            console.log(error);
            res.send(error);
            return;
        }; // End of catch block from try at line 79

    }). // End of then clause from line 74

    catch(function(error)
    {
        console.log("try to edit the listItemObject to the itemListObject at line 81 FAILED.");
            
            return;
    }). // End of catch(function(error) at line 101

    then(function()
    {
        db.house.update({theList: newListString},
        {
        where:
            {
                houseID: "1234"
            }
        });
        if(failed ===false)
        {
            res.send(newListString);
        }
    }).
    catch(function(error)
    {
        console.log("db.house.update FAILED");
        failed = true;
        res.status(error.status || 500);
        res.send(error);
        return;
    });

    

}); // End of app_routes.get("/api/deleteItem/", ...
    

   module.exports = app_routes; 