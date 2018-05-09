

module.exports = function(sequelize, DataTypes)
{
	const house = sequelize.define('house' , 
		{
			houseID:
			{
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true

			}, // End of houseID field definition

			houseName:
			{
				type: DataTypes.STRING,
				allowNull: false

			}, // End of the houseName field definition

			theList:
			{
				type: DataTypes.TEXT
			}

		} // End of const houses = sequelize.define('house',

	); //End of const housees = sequelize.define('house' , 
	return house; 
} // End of module.exports = function()