import 'dotenv/config';

export default {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT || 5432,
		dialect: 'postgres',
	},
	test: {
		username: 'postgres',
		password: 'postgres',
		database: 'testMuseum',
		host: 'db',
		dialect: 'postgres',
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT || 5432,
		dialect: 'postgres',
	},
};
