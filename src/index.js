import connect from './database/connect.js';
import Log from './utils/logs.js';
import { ObjectManager } from './database/managers/managers.js';
import Scraper from './scraper/scraper.js';

try {
    await connect();
} catch (error) {
    Log.Error('Failed to connect to the database:', error);
    process.exit(1);
}

const manager = new ObjectManager();
const objects = await manager.findAll();

await Promise.all(objects.map(async (object) => {
    let page = 1;
    const scraper = new Scraper(object, page);
    const response = await scraper.fetchData();
    const objects = scraper.parseData(response);
}));

process.exit(1);