const model = (sequelize, DataTypes) => {
	const Message = sequelize.define(
		'message',
		{
      id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			originUserId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'users',
          key: 'id',
        },
			},	
			destinyUserId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'users',
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

	return Message;
};

export default model;
