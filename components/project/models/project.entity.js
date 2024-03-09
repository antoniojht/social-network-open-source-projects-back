const { UUIDV4 } = require('sequelize');

const model = (sequelize, DataTypes) => {
	const Project = sequelize.define(
		'project',
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
			startDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			linkRepository: {
				type: DataTypes.STRING(256),
				allowNull: true,
			},
			lastUpdateDate: {
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

  Project.addHook('beforeCreate', (project) => {
		project.id = UUIDV4();
	});

	return Project;
};

export default model;
