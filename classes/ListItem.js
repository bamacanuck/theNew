
"use strict";

/**
 * 
 */
class ListItem
{
    /**
     * 
     */
    constructor(incomingName)
    {
        /**
         * name is what it seems - the name of an item in the list
         * @type {String}
         */
        this.name = incomingName;


        /**
         * quantity is the number of things in the list that should be
         * procured.  Quantity is a string rather than a number, although
         * the string must be composed of numerals.
         * @type {String}
         */
        this.quantity = "1";


        /**
         * upcCode is the ?? digit code that represents an item in the
         * list.  upcCode is a string rather than a number, although
         * the string must be composed of numerals.
         * @type {String}
         */
        this.upcCode = "";


        /**
         * note is, as it seems, a note about an item in the list.  There
         * are no restrictions on what the note should be.  Possible notes
         * might be "Be sure to check the sell by date to get fresh milk" or
         * "Be sure the leaves of the lettuce are firm instead of droopy."
         * @type {String}
         */
        this.note = "";


        /**
         * marked is a Boolean showing whether or not the item is "marked."
         * Depending on what the listItems are, "marked" could mean bought,
         * acted upon, or any other thing.
         * @type {Boolean}
         */
        this.marked = false;

        /**
         * imageURL is a string that gives the URL of an image of the
         * listItem. 
         * @type {String}
         */
        this.imageURL = "";


        /**
         * [fromString description]
         * @param  {[type]} incomingString [description]
         * @return {[type]}                [description]
         */
        this.fromString = (incomingString) =>
        {

        }; // End of fromString()


    } // End of constructor

} // End of class ListItem

module.exports = ListItem;

