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
				type: DataTypes.STRING(32),
				allowNull: false,
				unique: true,
			},
			email: {
				type: DataTypes.STRING(256),
				allowNull: true,
			},
			provider: {
				type: DataTypes.STRING(32),
				defaultValue: true,
			},
      profileImage: {
				type: DataTypes.STRING(32),
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

	User.associate = ({ Project, Collaborator }) => {
		User.belongsToMany(Project, {
			through: Collaborator,
		});
	};

	return User;
};

export default model;
