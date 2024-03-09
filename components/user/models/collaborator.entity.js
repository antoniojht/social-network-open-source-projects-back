const model = (sequelize, DataTypes) => {
	const Collaborator = sequelize.define(
		'collaborator',
		{
      id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			userId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'users',
          key: 'id',
        },
			},
			projectId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'projects',
          key: 'id',
        },
			},
      rol: {
				type: DataTypes.STRING(32),
				allowNull: false,
			},
			statusCollaborator: {
				type: DataTypes.STRING(32),
				allowNull: false,
			},
		},
		{
			sequelize,
			underscored: true,
			paranoid: true,
		},
	);

	return Collaborator;
};

export default model;
