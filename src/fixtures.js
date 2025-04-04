import connect from './database/connect.js';
import Log from './utils/logs.js';

try {
    await connect();
} catch (error) {
    Log.Error('Failed to connect to the database:', error);
    process.exit(1);
}