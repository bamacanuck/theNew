'use strict';

/* This file is an example of how the classes should be used
 * in the backend files of our shopping list project.
 */

/* Pull in the ListItem and ItemList class files.
 * This brings in the class definitions, and so we can
 * create objects by writing code that looks like
 * let milkItem = new ItemClass("milk");
 * that would create a new list item representing milk
 * that we could put into a list.  We create a new object
 * representing a list by writing code that looks like
 * let groceryList = new ListClass();
 * Then, we can add the milk object to the list object
 * groceryList.add(milkItem);
 */
const ItemClass = require("./ListItem.js");
const ListClass = require("./ItemList.js");

/* Create our grocery list object: */
let groceryList = new ListClass();

/* Create a milk item that we will add to the list */
let milkItem = new ItemClass("milk");

/* Now, add the milkItem to our groceryList object */
groceryList.add(milkItem);

/* We also need cheese, so create another item object to go into the list */
let cheeseItem = new ItemClass("cheese");

/* Put the cheese item in the list (listObject) 
 * Note: I'm going to stop saying "listObject" and just say list.  It will 
 * be understood that our list is an object.
 */
groceryList.add(cheeseItem);

/* Let's add bread, and let's also drop the word object or item from the 
 * object that will represent bread.  
 */
let bread = new ItemClass("bread");

/* Now, add bread to our groceryList. */
groceryList.add(bread);

/* Our grocery list is stored in the database as a JSON string.  Let's
 * take a look at what that string looks like.
 */
let listAsString = JSON.stringify(groceryList);
console.log("\n\nHere is the list as a JSON string");
console.log("This is how it is stored in the database.\n");
console.log(listAsString);

/* That's how the groceryList is stored in the data base, but let's make 
 * it pretty so we can see better what's going on here.
 */
 let listAsPrettyString = JSON.stringify(groceryList, null, 2);
 console.log("\n\n Here is the groceryList as a pretty string");
 console.log(listAsPrettyString);

/* Let's talk about how the list is pulled out of the database for us
 * to work with it.  
 */

/* First, we make an empty new list. 
 */
let workingList = new ListClass();

/* Next, we import the JSON string into the new, empty list.
 */
workingList.fromString(listAsString);

/* Now, check out the workingList:
 */
console.log("\n\nHere is the working list object");
console.log(workingList);

/* Let's look at just the contents of the working list by
 * using JSON stringify beautifully.
 */
console.log("\n\nHere is the beautifully stringified working list");
console.log(JSON.stringify(workingList, null, 2));

/* Let's add beer to the working list
 */
let beer = new ItemClass("beer");
workingList.add(beer);

/* Wait, let's get two beers */
workingList.setItemQuantity("beer", 2);

/* Now, pretty print the workingList again.
 */
console.log("\n\nHere is the beautifully stringified working list after adding 2 beers");
console.log(JSON.stringify(workingList, null, 2));

/* This is the string we would put back into the database after we've finished
 * working with it
 */
console.log("\n\nHere is the string we would put back into the database");
console.log(JSON.stringify(workingList));


