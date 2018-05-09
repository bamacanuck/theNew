

function AddClick(event)
{
	console.log("I'm in AddClick");
	$.ajax({url: 'http://localhost:8080/api/addItem', type: 'GET', 
		data: {"houseID":"1234","name":"milk",
    "quantity":"1","upcCode":"","note":"","marked":false,"imageURL":""}}).

      done (function(result){
        console.log("Did addItem");
       
      }).
      fail(function(data)
      {
      	console.log("There was an error");
        console.log("status:  " + data.status);
        console.log("status text:  " + data.statusText);
      });

}

function EditClick(event)
{
	console.log("I'm in EditClick");
	$.ajax({url: 'api/editItem', type: 'GET', 
		data: {"houseID":"1234","name":"milk",
    "quantity":"2","upcCode":"","note":"","marked":false,"imageURL":""}}).

      done (function(result){
        console.log("Did editItem");
       
      }).
      fail(function(data)
      {
      	console.log("There was an error");
        console.log("status:  " + data.status);
        console.log("status text:  " + data.statusText);
      	
      });
}

function DeleteClick(event)
{
	console.log("I'm in DeleteClick");
	$.ajax({url: 'api/deleteItem', type: 'GET', 
		data: {"houseID":"1234","name":"milk",
    "quantity":"2","upcCode":"","note":"","marked":false,"imageURL":""}}).

      done (function(result){
        console.log("Did deleteItem");
       
      }).
      fail( function(data)
      {
      	console.log("There was an error");
        console.log("status:  " + data.status);
        console.log("status text:  " + data.statusText);
        
      });

}


// A $( document ).ready() block.
$( document ).ready(function() {

    console.log( "ready!" );

    /**************************************************
    *             Button Click Listeners              *
    ***************************************************/             

   
	$('#AddButton').click(AddClick);
	$('#EditButton').click(EditClick);
	$('#DeleteButton').click(DeleteClick);
});