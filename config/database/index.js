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

		this.#loadModels();
		await this.#authenticate();
	};

	#loadModels = () => {
    // Example of loading a model
		// this.Entity = require('../../components/entity-1/models/entity')(
		// 	this.sequelize,
		// 	Sequelize
		// );

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
