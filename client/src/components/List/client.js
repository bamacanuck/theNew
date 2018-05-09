function search(query) {
    return fetch(`api/addItem`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

function AddClick(event){
    console.log("I'm in AddClick");
    $.ajax({url: 'http://localhost:8080/api/addItem', type: 'GET', 
        data: {"houseID":"1234","name":"milk","quantity":"1","upcCode":"","note":"","marked":false,"imageURL":""}}).

      then (function(result){
        console.log("Did addItem");
       
      }).
      catch()
      {
        console.log("There was an error");
      };
}

function parseJSON(response) {
    return response.json();
}

const Client = { search };
export default Client;