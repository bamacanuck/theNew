var db = require("../../models");

function GetById(id){
  //express call to url
  //that will do an axios get call
  return db.users.filter(user => id === user.id);
}

module.exports = GetById;