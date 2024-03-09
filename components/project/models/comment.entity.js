const model = (sequelize, DataTypes) => {
	const Comment = sequelize.define(
		'comments',
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
			commentId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'comments',
          key: 'id',
        },
			},
      text: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			sequelize,
			underscored: true,
			paranoid: true,
		},
	);

	return Comment;
};

export default model;
