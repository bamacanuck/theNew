import React from "react";

// The css styling for this component is in the ../styles/TextAreaType1.css file import ../styles/ListItemComponent.css;


// By extending the React.Component class, TextArea inherits functionality from it
class ListItem extends React.Component 
{

    constructor(props)
    {

    	/* We MUST call the parent class contructor and send it the props object */
    	super(props);

	    // The state of a ListItem component mirrors the data attributes
	    // of a ListItem object as defined in ListItem.js.
	    // Set the initial state of the ListItem component from the
	    // incoming props
	    // 
	    this.state = 
	    {
	        itemClassName: "normalItem"
	    };

    } // End of constructor()


	handleDelete = (event) =>
	{
		this.props.delete_callback(this.props.index);
	};

    // The render method returns the JSX that should be rendered
	render() 
	{
		
	    return (

	    	<div className="ListItem">  

	    		{/* The text input that has the item name */}
	    		<input type="text" 
	   			value={this.props.name}
	    		size="30"
	    		readOnly
	    		id="list_item_name" 
	    		className={this.state.itemClassName}></input>


	    		{/* The text input that has the item name */}
	    		<input type="text" 
	   			value={this.props.quantity}
	    		size="3"
	    		id="list_item_quantity" 
	    		onChange={this.handleQuantityChange} 
	    		className={this.state.itemClassName}></input>

	    	{/* The button for editing an item's. quantity */}
	    		<button onClick={this.handleEdit}>Edit</button>

	    	{/* The button for deleting an item. */}
	    		<button onClick={this.handleDelete}>&theta;</button>

	    	
	    	</div>

	    ) // End of return ( ...

	} // End of the render function

} // End of class ListItem extends React.Component 

export default ListItem;

