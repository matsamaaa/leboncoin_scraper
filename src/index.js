import connect from './database/connect.js';
import Log from './utils/logs.js';
import { ObjectManager, ResultManager } from './database/managers/managers.js';
import Scraper from './scraper/scraper.js';

try {
    await connect();
} catch (error) {
    Log.Error('Failed to connect to the database:', error);
    process.exit(1);
}

const objectManager = new ObjectManager();
const resultManager = new ResultManager();
const objects = await objectManager.findAll();
const finalObjects = [];

await Promise.all(objects.map(async (object) => {
    let page = 1;
    const scraper = new Scraper(object, page);
    const response = await scraper.fetchData();
    const scrapedItems = scraper.parseData(response);

    scrapedItems.map((item) => {
        if (item.price <= object.price) finalObjects.push(item);
    });
}));

await Promise.all(finalObjects.map((async (item) => {
    const isObjectExists = await resultManager.findById(item.objectsId);
    console.log(isObjectExists);
    if (isObjectExists) {
        Log.Error(`Object already exists: ${item.name}`);
    } else {
        await resultManager.create(item);
        Log.Success(`Object created: ${item.name}`);
    }
})));

process.exit(1);