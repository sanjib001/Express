import winston from "winston";

const {combine, timestamp, printf, colorize, errors } = winston.format;

// Define a custom fromat fro the logs
const customFormat = printf(({level, message, timestamp, stack }) =>{
    return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = winston.createLogger({
    level: "info", //Default level to log
    format: combine(
        timestamp({ fromat: "YYYY-MM=DD HH:mm:ss" }),
        errors({ stack: true }),
        customFormat 
    ),
    transports: [
        //1. Log errors into a specific file
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error"
        }),
        //2. Log all activity intoa combined file
        new winston.transports.File({
            filename: "logs/info.log",
            level: "info"
        })
    ]
});

// if (procrss.env.NODE_ENV !== "production"){
    logger.add(new winston.transports.Console({
        format: combine(
            colorize(),
            customFormat
        ),
    }));
// }

export default logger;