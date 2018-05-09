var db = require("../../models");

function GetByHId(id){
  //express call to url
  //that will do an axios get call
  return db.houses.filter(house => id === house.id);
}

module.exports = GetByHId;