import winston, { format as _format, transports as _transports, createLogger } from 'winston';
import config from 'config';
import split from 'split';
import { existsSync, mkdirSync } from 'fs';

const { combine, timestamp, label, printf } = _format;
const { format } = winston;
const logFilePath = './logs';
const env = process.env.NODE_ENV || 'development';

const consoleLoggerTransportsConfig = {
	level: config.logs.destinations.console.level,
	handleExceptions: true,
	format: format.combine(format.colorize(), format.simple()),
	timestamp: true,
};

const myFormat = printf((info) => {
	const { timestamp, level, label, message, stack } = info;
	return JSON.stringify({
		level,
		timestamp,
		label,
		message,
		stack,
	});
});

const fileLoggerTransportsConfig = {
	level: config.logs.destinations.file.level,
	filename: `./logs/${env}.log`,
	handleExceptions: true,
	format: combine(
		_format.splat(),
		label({ label: `./logs/${env}.log` }),
		timestamp(),
		myFormat
	),
	maxsize: 5242880,
	maxFiles: 10,
};

if (!existsSync(logFilePath)) {
	mkdirSync(logFilePath);
}

const defaultLoggerTransports = [];
const accessLoggerTransports = [];

if (config.logs.destinations.console.enabled) {
	defaultLoggerTransports.push(
		new _transports.Console(consoleLoggerTransportsConfig)
	);
	accessLoggerTransports.push(
		new _transports.Console(consoleLoggerTransportsConfig)
	);
}
if (config.logs.destinations.file.enabled) {
	defaultLoggerTransports.push(
		new _transports.File(fileLoggerTransportsConfig)
	);
	accessLoggerTransports.push(
		new _transports.File(fileLoggerTransportsConfig)
	);
}

const defaultLogger = createLogger({
	transports: defaultLoggerTransports,
	exitOnError: false,
});
const accessLogger = createLogger({
	transports: accessLoggerTransports,
	exitOnError: false,
});

export default defaultLogger;

const localDevStream = split().on('data', (message) => {
	accessLogger.info(message);
});
const defaultStream = {
	write(message, encoding) {
		accessLogger.info(message);
	},
};

export const stream = env !== 'localdev' ? defaultStream : localDevStream;
export const accessLoggingFormat = config.logs.access.format;
