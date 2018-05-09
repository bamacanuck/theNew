

/**
 * A module for defining the mySQL users table.
 * @module Users Table
 */

/**
 * defineUsersTable description
 * @alias module Users Table
 */
function defineUsersTable(sequelize, DataTypes)
{
	/**
	 * users is an object that defines the users table in the mySQL database.
	 * Each record (row) in the table defines one user. 
	 * @type {object}
	 */
	const users = sequelize.define('user',
		{
			/**
			 * userName is the column (field) in the users table that contains
			 * the user's name.  
			 * @type {STRING}
			 */
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

			/**
			 * emailAddress is the column (field) that contains a user's 
			 * e-mail address
			 * @type {STRING}
			 */
			emailAddress:
			{
				type:DataTypes.STRING,
				allowNull: false,
				unique: true,
				
				validate:
				{
					isEmail: true

				} // End of validate object for emailAddress

			}, // End of emailAddress field definition

			
			password:
			{
				type:DataTypes.TEXT,
				allowNull: false,
			}, // End of password field definition

			
			
		} // End of the object parameter in the sequelize.define() definition
		
	); // End of const users = sequelize.define('user',
	return users;

} // End of module.exports = function()

module.exports = defineUsersTable; 
