import { UUIDV4 } from 'sequelize';

const model = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING(64),
				allowNull: false,
				unique: true,
			},
			email: {
				type: DataTypes.STRING(64),
				allowNull: true,
			},
			provider: {
				type: DataTypes.STRING(32),
				defaultValue: true,
			},
      profileImage: {
				type: DataTypes.STRING(64),
				allowNull: false,
			},
			lastLogin: {
				type: DataTypes.DATE,
				allowNull: true,
			}
		},
		{
			sequelize,
			underscored: true,
			paranoid: true,
		},
	);

  User.addHook('beforeCreate', (user) => {
		user.id = UUIDV4();
	});

	User.associate = (database) => {
		User.belongsToMany(database.Project, {
			through: database.Collaborator,
		});

		User.belongsToMany(database.Project, {
			through: database.Rating,
		});

		User.belongsToMany(database.Project, {
			through: database.Comment,
		});

		User.belongsToMany(database.Project, {
			through: database.Favorite,
		});
	};

	return User;
};

export default model;
