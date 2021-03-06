import React from "react";
import  ListItem from "./ListItemComponent";


// The css styling for this component is in the ../styles/TextAreaType1.css file
// import "../styles/ItemListComponent.css";


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
	        "list": [

	        {"index":"0","name":"milk","quantity":"1","upcCode":"","note":"","marked":false,"imageURL":""},
	        {"index":"1","name":"cheese","quantity":"1","upcCode":"","note":"","marked":false,"imageURL":""},
	        {"index":"2","name":"bread","quantity":"1","upcCode":"","note":"","marked":false,"imageURL":""},
	        {"index":"3","name":"beer","quantity":2,"upcCode":"","note":"","marked":false,"imageURL":""}
	                
	        ]
	
	    };

	    this.handle_Add = (index) =>
	    {
	    	console.log("I'm in add");
	    	
	    	let newName = this.refs.myInput.value;
	    	let notesArr = this.state.list;
	    	let addIndex = this.state.list.length;
	    	let newAddCallback = this.add_callback;
	    	let newDeleteCallback = this.delete_callback
	    	let addObject = 
	    	{
	    		"index": addIndex,
	    		"name": newName,
	    		"quantity":"1",
	    		"upcCode":"",
	    		"note":"",
	    		"marked":false,
	    		"imageURL":""
	    	
	    	};
	    	notesArr.push(addObject);
	    	this.setState({ list: notesArr });
	    	this.refs.myInput.value = "";

	    };

	    this.delete_callback = (index) =>
	    {
	    	

	    	let notesArr = this.state.list;
	    	
            notesArr.splice(index, 1);
            let arrayLength = notesArr.length;
            let i = 0;
            
            for (i=0; i<arrayLength; ++i )
            {
            	notesArr[i].index = i;
            }
            
            
            this.setState({ list: notesArr });
            
	   
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
				<h1> Shopping List</h1>

	    		{items}
	    	
	    		{/* The text input that will the new added item name */}
		    		<input type="text" className="form-control" 
		    		id="newItemID"
		    		ref="myInput"
		   			value={this.state.index}
		    		size="30"></input>

	    		{/* The button for adding an item. */}
	    		<button onClick={this.handle_Add}>Add Item</button>
	    	</div>

	    ) // End of return ( ...

	} // End of the render function

} // End of class ListItem extends React.Component 

export default ItemList;