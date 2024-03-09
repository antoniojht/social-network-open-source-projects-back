import Sequelize from 'sequelize';
import config from './config.js';
import logger from '../../libs/logger.js';

const env = process.env.NODE_ENV || 'development';

class Database {
	constructor() {
		this.sequelize = null;
		this.Sequelize = null;
		this.config = config[env];
	}

	init = async () => {
		this.Sequelize = Sequelize;
		this.sequelize = new Sequelize(
			this.config.database,
			this.config.username,
			this.config.password,
			this.config
		);

		await this.#loadModels();
		await this.#authenticate();
	};

	#loadModels = async () => {
		const UserModel = await import('../../components/user/models/user.entity.js');
    this.User = UserModel.default(this.sequelize, Sequelize);

		const CollaboratorModel = await import('../../components/user/models/collaborator.entity.js');
    this.Collaborator = CollaboratorModel.default(this.sequelize, Sequelize);

		const FollowModel = await import('../../components/user/models/follow.entity.js');
    this.Follow = FollowModel.default(this.sequelize, Sequelize);

		const ProjectModel = await import('../../components/project/models/project.entity.js');
    this.Project = ProjectModel.default(this.sequelize, Sequelize);

		const RatingModel = await import('../../components/project/models/rating.entity.js');
    this.Rating = RatingModel.default(this.sequelize, Sequelize);

		const CommentModel = await import('../../components/project/models/comment.entity.js');
    this.Comment = CommentModel.default(this.sequelize, Sequelize);

		const FavoriteModel = await import('../../components/project/models/favorite.entity.js');
    this.Favorite = FavoriteModel.default(this.sequelize, Sequelize);

		Object.keys(this).forEach((modelName) => {
			if (this[modelName].associate) {
				this[modelName].associate(this);
			}
		});
	};

	#authenticate = async () => {
		this.sequelize
			.authenticate()
			.then(() => {
				logger.info('-------authenticate db-------');
			})
			.catch((err) => {
				logger.info(`Failed to authenticate db: ${err.message}`);
			});
	};
}
export default new Database();
