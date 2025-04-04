import chalk from 'chalk';
import dateformat from 'dateformat';

class Log {
    static Date() {
        return dateformat(new Date(), 'dd-mm-yyyy HH:MM:ss');
    }

    static Success(message) {
        console.log(`${chalk.white.bgGreen.bold(`SUCCESS`)} [${Log.Date()}] » ${message}`);
    }

    static Error(message) {
        console.log(`${chalk.white.bgRed.bold(`ERROR`)} [${Log.Date()}] » ${message}`);
    }

    static Info(message) {
        console.log(`${chalk.white.bgBlue.bold(` INFO  `)} [${Log.Date()}] » ${message}`);
    }
}

export default Log;