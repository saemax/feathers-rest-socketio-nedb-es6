import { createLogger, format, transports } from 'winston';

export default createLogger({
	level: 'debug',
	format: format.combine(
		format.splat(),
		format.simple()
	),
	transports: [
		new transports.Console()
	]
});
