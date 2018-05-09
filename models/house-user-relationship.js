

module.exports = function(sequelize, DataTypes)
{
	const houseUserRelationship = sequelize.define('house-user-relationship' , 
		{
			ID:
			{
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			}, 

			houseID:
			{
				type: DataTypes.INTEGER,
				allowNull: false,

			}, // End of houseID field definition

			userName:
			{
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				primaryKey: true,
				/**
				 * userName.validate is the sequelize validation object used 
				 * to validate entries in the userName field of the users 
				 * table
				 * @type {Object}
				 */
				validate:
				{
					/**
					 * users.userName.validate.notContains is a validation rule that
					 * specifies a string that CANNOT appear in the 
					 * users.userName entry in any record (row) of the users
					 * table.
					 * @type {String}
					 */
					notContains: '<script>',

					/**
					 * users.userName.validate.usisAlphanumeric is a validation
					 * rule that requires that entries in the users.userName 
					 * field can be comprised of ONLY letters and numerals
					 * @type {Boolean}
					 */
					isAlphanumeric: true

				} // End of validate object for userName

			}, // End of userName field definition

		} // End of const houses = sequelize.define('house',

	); //End of const housees = sequelize.define('house' , 
	return houseUserRelationship; 
} // End of module.exports = function()