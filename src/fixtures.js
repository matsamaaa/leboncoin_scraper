import connect from './database/connect.js';
import Log from './utils/logs.js';
import { ObjectManager } from './database/managers/managers.js';

import fs from 'fs';
import path from 'path';

const datasPath = path.resolve('./src/fixtures/datas.json');
const datas = JSON.parse(fs.readFileSync(datasPath, 'utf-8'));

try {
    await connect();
} catch (error) {
    Log.Error('Failed to connect to the database:', error);
    process.exit(1);
}

Log.Info('Loading fixtures...');

await Promise.all(datas.map(async (data) => {
    const objectManager = new ObjectManager();
    const object = await objectManager.create(data);
    Log.Success(`Object created: ${object.name}`);
}));

Log.Success('Fixtures loaded successfully');
process.exit(1);