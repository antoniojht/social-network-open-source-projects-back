const model = (sequelize, DataTypes) => {
	const Rating = sequelize.define(
		'ratings',
		{
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
      score: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			underscored: true,
			paranoid: true,
		},
	);

	return Rating;
};

export default model;
