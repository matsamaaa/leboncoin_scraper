import { load } from 'cheerio';
import Log from '../utils/logs.js';
import puppeteer from 'puppeteer';

class Scraper {

    constructor(object, page) {
        this.baseUrl = 'https://www.leboncoin.fr';
        this.searchUrl = `${this.baseUrl}/recherche?text=${object.name}&page${page}`;
    }
    
    async fetchData() {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
    
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36');
        
        const response = await page.goto(this.searchUrl, { waitUntil: 'networkidle2' });
        response.status() === 200 
            ? Log.Info(`Page loaded: ${response.status()}`) 
            : Log.Error(`Page did not loaded: ${response.status()}`);

        const html = await page.content();
        

        await browser.close();
        return html;
    }
    
    parseData(html) {
        const $ = load(html);
        const objects = [];

        $('li[class*="styles_adCard__klAb3"]').each((index, element) => {
            const name = $(element).find('p[data-test-id="adcard-title"]').text().trim();
            const price = $(element).find('p[data-test-id="price"]').text().trim();
            const url = $(element).find('a[href^="/ad/collection/"]').attr('href');
            const urlParts = String(url).split('/');
            const objectId = urlParts[urlParts.length - 1];

            const object = {
                oid: objectId,
                name: name,
                price: Number(price.split('€')[0].replace(/\s/g, '')),
                url: `${this.baseUrl}${url}`,
            }

            objects.push(object);
        });

        objects.length > 0 
            ? objects.slice(0, 1)
            : [];

        return objects;
    }
}

export default Scraper;