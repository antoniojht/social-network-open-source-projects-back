import { UUIDV4 } from 'sequelize';

const model = (sequelize, DataTypes) => {
	const Project = sequelize.define(
		'projects',
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
			description: {
				type: DataTypes.STRING(256),
				allowNull: true,
			},
			isEnabled: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
      category: {
				type: DataTypes.STRING(32),
				allowNull: false,
			},
			languages: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			linkRepository: {
				type: DataTypes.STRING(256),
				allowNull: true,
			},
		},
		{
			sequelize,
			underscored: true,
			paranoid: true,
		},
	);

  Project.addHook('beforeCreate', (project) => {
		project.id = UUIDV4();
	});

	Project.associate = (database) => {
		Project.belongsToMany(database.User, {
			through: database.Collaborator,
		});

		Project.belongsToMany(database.User, {
			through: database.Rating,
		});

		Project.belongsToMany(database.User, {
			through: database.Comment,
		});

		Project.belongsToMany(database.User, {
			through: database.Favorite,
		});
	};

	return Project;
};

export default model;
