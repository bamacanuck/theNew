
const router = require("express").Router();

const housesRoutes = require("./houses");
// const usersRoutes = require("./user");
// const houseUserRelationshipRoutes = require("./house-user-relationship");
router.use("/ItemList", housesRoutes);
module.exports = router;



