
"use strict";

class ItemList
{
    
    /**
      * The ItemList constructor constructs an ItemList object.
      */
    constructor()
    {
        /**
         * [list description]
         * 
         * @type {Array}
         */
        this.list = [];


        /**
         * testIncomingObject tests a parameter to verify that it is an object
         * @param  {Object} incomingItemName The parameter to be tested.
         * The testIncomingObject method either returns nothing if 
         * the incoming parameter passes all the tests, or it throws an
         * appropriate error object.
         */
        this.testIncomingObject = (incomingItemName) =>
        {
            // Test for null
            if( incomingItemName === null) 
            {
                throw new ReferenceError("The incoming parameter is null.");
            }

            // Test for undefined
            if( incomingItemName === undefined) 
            {
                throw new ReferenceError("The incoming parameter is undefined.");
            }

            // Test for wrong type as best as javascript will allow
            if( (typeof incomingItemName) !== "object")
            {
                throw new TypeError("The incoming parameter is not an object.");
            }

        }; // End of testIncomingObject()


        /**
         * testIncomingString tests a parameter to verify that it is a string.
         * @param  {String} incomingItemName The parameter to be tested.
         * The testIncomingObject method either returns nothing if 
         * the incoming parameter passes all the tests, or it throws an
         * appropriate error object.
         */
        this.testIncomingString = (incomingName) =>
        {
            // Test for null
            if( incomingName === null) 
            {
                throw new ReferenceError("The incoming parameter is null.");
            }

            // Test for undefined
            if( incomingName === undefined) 
            {
                throw new ReferenceError("The incoming parameter is undefined.");
            }

            // Test for wrong type as best as javascript will allow
            if( (typeof incomingName) !== "string")
            {
                throw new TypeError("The incoming parameter is not a string.");
            }

        }; // End of testIncomingString()


        /**
         * has checks the list object to see if there is an item in
         * the list with the given name.
         * @param  {String}  incomingItemName The name to search for.
         * @return {Boolean} true if incomingItemName is in the list;
         *                   false otherwise
         */
        this.has = (incomingItemName) =>
        {
            let retValue = false;
            const count  = this.list.length;
            let i        = 0;

            this.testIncomingString(incomingItemName);

            for(i = 0; i < count; ++i)
            {
                if(this.list[i].name === incomingItemName)
                {
                    retValue = true;
                    break;
                }

            } // End of for(i = 0; i < count; ++i)
            
            return retValue;

        }; // End of this.has()


        /**
         * add adds a ListItem object to the list.
         * @param {Object} incomingItemObject The ListItem object to be added.
         * If the incoming parameter is not a valid object, or if the item
         * is already in the list, the add method will throw an 
         * appropriate Error object.
         */
        this.add = (incomingItemObject) =>
        {
            // Test the incoming parameter
            this.testIncomingObject(incomingItemObject);

            // Check to see if the item is already in the list
            if(this.has(incomingItemObject.name))
            {
                throw new Error("The item is already in the list.");
            }
            
            // If all the parameter checks passed, add the object to the list
            this.list.push(incomingItemObject);
                
        }; // End of this.add()


        /**
         * mark sets the "marked" data attribute in a ListItem object to true.
         * @param  {String} incomingItemName The name of the item to mark.
         * The mark method either sets the marked data attribute of the 
         * ListItem to true, or throws an appropriate error.
         */
        this.mark = (incomingItemName) =>
        {
            // Test the incoming parameter
            this.testIncomingString(incomingItemName);
            
            // Get the ListItem object 
            let itemToMark = this.getListItem(incomingItemName);

            // Set the marked data attribute to true
            itemToMark.marked = true;
            
        }; // End of this.mark()


        /**
         * deleteItem deletes the specified item from the list
         * @param  {String} incomingItemName The name of the item to delete.
         */
        this.deleteItem = (incomingItemName) =>
        {
            let i = -1;

            console.log("At the beginning of the deleteItem method of the list, the list is");
            console.log(this.list);

            // Test the incoming parameter
            this.testIncomingString(incomingItemName);

            // Get the index of the item to delete
            // Note that getIndexOfItem will throw
            // an error if the item is not in the list.
            i = this.getIndexOfItem(incomingItemName);

            // Delete the item
            this.list.splice(i,1);

            console.log("At the end of the deleteItem method of the list, the list is");
            console.log(this.list);
            
        }; // End of this.deleteItem()


        /**
         * setItemQuantity sets the quantity of an item in the list.
         * @param {String} incomingItemName The item to edit.
         * @param {String} newQuantity The new quantity of the item.
         */
        this.setItemQuantity = (incomingItemName, newQuantity) =>
        {
            let itemToEdit = {};

            // Test the incoming parameter
            this.testIncomingString(incomingItemName);

            // Get the item in the list
            itemToEdit = this.getListItem(incomingItemName);

            // Set the quantity of the item
            itemToEdit.quantity = newQuantity;
            
        }; // End of this.setItemQuantity()


        /**
         * getItemQuantity gets the quantity of an item in the list.
         * @param {String} incomingItemName The name of the item to query
         * @return {Number} The quantity of the items in the list.
         */
        this.getItemQuantity = (incomingItemName) =>
        {
            let itemToEdit  = {};
            let retQuantity = 0;

            // Test the incoming parameter
            this.testIncomingString(incomingItemName);

            // Get the item in the list
            // Note that getListItem will throw an error if
            // the item is not in the list.
            itemToEdit = this.getListItem(incomingItemName);

            // Get the quantity of the item
            retQuantity = itemToEdit.quantity;

            return retQuantity;
            
        }; // End of this.setItemQuantity()

        
        /**
         * setUPC sets the UPC value of a specified item.
         * @param  {String} incomingItemName The name of the item to be edited.
         * @param  {String} newUPC  The new value of the item's UPC
         */
        this.setUPC = (incomingItemName, newUPC) =>
        {
            // Test the incoming parameter
            this.testIncomingString(incomingItemName);
            
            // Get the item in the list
            // Note that getListItem will throw an error if
            // the item is not in the list.
            let itemToEdit = this.getListItem(incomingItemName);

            // Set the upc
            itemToEdit.upcCode = newUPC;
            
        }; // End of this.setUPC()

        
        /**
         * getUPC sets the UPC value of a specified item.
         * @param  {String} incomingItemName The name of the item to be found.
         * @return {Object} The UPC code requested.
         */
        this.getUPC = (incomingItemName) =>
        {
            // Test the incoming parameter
            this.testIncomingString(incomingItemName);
            
            // Get the item in the list
            // Note that getListItem will throw an error if
            // the item is not in the list.
            let itemToEdit = this.getListItem(incomingItemName);

            // Get the upc
            return itemToEdit.upcCode;

        }; // End of this.getUPC()


        /**
         * setNote sets the note of a specified item.
         * @param  {String} incomingItemName The name of the item to be edited.
         * @param  {String} newUPC  The new value of the item's note
         */
        this.setNote = (incomingItemName, newNote) =>
        {
            // Test the incoming parameter
            this.testIncomingString(incomingItemName);
            
            // Get the item in the list
            // Note that getListItem will throw an error if
            // the item is not in the list.
            let itemToEdit = this.getListItem(incomingItemName);

            // Set the note
            itemToEdit.note = newNote;
            
        }; // End of this.setNote()

        
        /**
         * getNote gets the note of a specified item.
         * @param  {String} incomingItemName The name of the item to be found.
         * @return {String} The note requested.
         */
        this.getNote = (incomingItemName) =>
        {
            let retValue = "";

            // Test the incoming parameter
            this.testIncomingString(incomingItemName);
            
            // Get the item in the list
            // Note that getListItem will throw an error if
            // the item is not in the list.
            let itemToEdit = this.getListItem(incomingItemName);

            // Get the note
            retValue = itemToEdit.note;

            return retValue;

        }; // End of this.getNote()


        /**
         * getListItem gets (and returns) a ListItem object from
         * the list.  If the item named in the call to getListItem()
         * is not in the list, then a ReferenceError object is thrown.
         * @param  {String} incomingItemName The name of the item in
         *                                   the list that should be
         *                                   returned.
         * @return {Object} The ListItem object requested.
         */
        this.getListItem = (incomingItemName) =>
        {
            let retItem = null;
            let i       = 0;
            let count   = this.list.length;

            for(i = 0; i < count; ++i)
            {
                if(this.list[i].name === incomingItemName)
                {
                    retItem = this.list[i];
                    break;

                }

            } // End of for(i = 0; i < count; ++i)

            if(retItem === null)
            {
                throw new ReferenceError(`${incomingItemName} is not in list`);
            }

            return retItem;

        }; // End of this.getListItem()


        /**
         * getIndexOfItem gets the index of an item in the list
         * @param  {String} incomingItemName The name of the item to find.
         * @return {Number} The index of the item in the list.  If the
         * item is not in the list, an appropriate Error object is thrown.
         */
        this.getIndexOfItem = (incomingItemName) =>
        {
            let       i = -1;
            const count = this.list.length;
            

            // Test the incoming parameter
            this.testIncomingString(incomingItemName);

            // Look for the item
            for(i = 0; i < count; ++i)
            {
                
                if(this.list[i].name === incomingItemName)
                {
                    
                    break;
                }
            }

            if(i === count)
            {
                throw new ReferenceError(`${incomingItemName} is not in list`);
            }

            return i;

        }; // End of getIndexOfItem()

        
        this.toString = () =>
        {
            let retValue = "";

            retValue = JSON.stringify(this);

            return retValue;

        }; // End of this.toString()


        
        this.fromString = (incomingString) =>
        {
            let anonObject = JSON.parse(incomingString);
            Object.assign(this, anonObject);
            
        }; // End of this.fromString()

        

    } // End of constructor()

} // End of class ItemList

module.exports = ItemList;

