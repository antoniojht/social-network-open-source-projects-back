const model = (sequelize, DataTypes) => {
	const Follow = sequelize.define(
		'follows',
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
			followedUserId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'users',
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

	return Follow;
};

export default model;
