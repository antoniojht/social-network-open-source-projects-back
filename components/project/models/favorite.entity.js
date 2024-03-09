const model = (sequelize, DataTypes) => {
	const Favorite = sequelize.define(
		'favorite',
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
		},
		{
			sequelize,
			underscored: true,
			paranoid: true,
		},
	);

	return Favorite;
};

export default model;
