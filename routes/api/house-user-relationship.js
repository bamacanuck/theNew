var db = require("../../models");

function GetByHURId(id){
  //express call to url
  //that will do an axios get call
  return db.house-user-relationship.filter(user => id === user.id);
}

module.exports = GetByHURId; 