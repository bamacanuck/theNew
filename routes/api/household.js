var db = require("../../models");

function GetByHHId(id){
  //express call to url
  //that will do an axios get call
  return db.filter(house => id === house.id);
}

module.exports = GetByHHId;