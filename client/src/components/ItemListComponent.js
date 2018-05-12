import React from "react";
import  ListItem from "./ListItemComponent";
import $ from 'jquery';


import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sedgwick Ave Display:300,400,700', 'sans-serif', 'cursive'],
    families: ['Shadows Into Light:300,400,700', 'sans-serif', 'cursive']
   
  }
});

const hStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 40
};

const bStyle = {
  fontFamily: "Sedgwick Ave Display" ,
  fontSize: 30
};

const tStyle = {
  fontFamily: "Shadows Into Light" ,
  fontSize: 30
};

// By extending the React.Component class, ItemList inherits functionality from it
class ItemList extends React.Component 
{

    constructor(props)
    {

    	/* We MUST call the parent class contructor and send it the props object */
    	super(props);

    	this.componentDidMount = () =>
    	{
    		console.log("The item list did mount.");
    	}

    	// Setting the initial state of the ListItem component
	    this.state = 
	    {
	        "list": []
	
	    };

	    this.handle_Add = (index) =>
	    {
	    	
	    	let backEndResult = "";

	    	$.ajax({
            url: '/api/addItem', type: 'GET',
            data: {
                "houseID": "1234", "name": this.refs.myInput.value,
                "quantity": "1", "upcCode": "", "note": "", "marked": false, "imageURL": ""
            }
	        }).
	        done( (result) => {
	            backEndResult = JSON.parse(result);
	            this.setState({list: backEndResult.list});
	        }).

	        fail(function (error) {
	            console.log("There was an error");
	            console.log("status:  " + error.status);
	            console.log(error.statusText);
	            
	        });

	        console.log("Returned from the ajax add method");
        
	    	this.refs.myInput.value = "";

	    };

	    
	    this.delete_callback = (name) =>
	    {
	    	
	    	let backEndResult = "";

	    	$.ajax({url: 'api/deleteItem', type: 'GET',
            data: {"houseID":"1234","name":name,
                "quantity":"2","upcCode":"","note":"","marked":false,"imageURL":""}}).

		    done( (result) => {
		            backEndResult = JSON.parse(result);
		            this.setState({list: backEndResult.list});
		        }).
		    
		    fail( function(data)
		    {
		        console.log("There was an error");
		        console.log("status:  " + data.status);
		        console.log("status text:  " + data.statusText);

		    });

	   
	    };

	    this.edit_callback = (index) =>
	    {
	    	console.log("edit" + index);
	    }

	    this.logArray = (arrayIn) =>
	    	{
	    		let arrayLength = arrayIn.length;
	    		let i = 0;
	    		for(i=0; i< arrayLength; ++i)
	    		{
	    			console.log("arrayIn[" + i + "].name is " + arrayIn[i].name); 
	    		}
	    	}

    } // End of constructor()

    

     // The render method returns the JSX that should be rendered
	render() 
	{
		
		let items = [];
		let i=0;
		for(i=0; i< this.state.list.length; ++i)
		{
			

			items[i] = <ListItem 
				index={i}
				key={this.state.list[i].index}
			    name={this.state.list[i].name} 
			    index={this.state.list[i].index}
			    quantity={this.state.list[i].quantity} 
			    upcCode={this.state.list[i].upcCode}
			    note={this.state.list[i].note} 
			    marked={this.state.list[i].marked} 
			    imageURL={this.state.list[i].imageURL} 
			    delete_callback={this.delete_callback}
			    edit_callback={this.edit_callback}/>

		}

	    return (
	    	<div>
				<h1 style= {hStyle}> Shopping List</h1>

	    		{items}
	    	
	    		{/* The text input that will the new added item name */}
		    		<input type="text" className="form-control" style = {tStyle}
		    		id="newItemID"
		    		ref="myInput"
		   			value={this.state.index}
		    		size="30"></input>

	    		{/* The button for adding an item. */}
	    		<button style = {bStyle} onClick={this.handle_Add}>Add Item</button>
	    	</div>

	    ) // End of return ( ...

	} // End of the render function

} // End of class ListItem extends React.Component 

export default ItemList;