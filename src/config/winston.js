/* eslint-disable no-param-reassign */
import winston from 'winston';

const { format } = winston;

const printFormat = format.printf((info) => {
  const { timestamp, level, message, ...args } = info;
  return `${timestamp} [${level}]: ${message} ${
    Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
  }`;
});

const enumerateErrorFormat = format((info) => {
  if (info.message instanceof Error) {
    info.message = Object.assign(
      {
        message: `${info.message.message}\n${info.message.stack}`,
      },
      info.message,
    );
  }
  if (info instanceof Error) {
    return Object.assign(
      {
        message: `${info.message}\n${info.stack}`,
      },
      info,
    );
  }
  return info;
});

const logger = winston.createLogger({
  format: format.combine(
    enumerateErrorFormat(),
    format.json(),
    format.align(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS ZZ',
    }),
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: format.combine(format.colorize(), printFormat),
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

export default logger;
