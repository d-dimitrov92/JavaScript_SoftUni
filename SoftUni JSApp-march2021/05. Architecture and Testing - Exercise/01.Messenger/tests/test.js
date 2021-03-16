const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const { describe } = require('mocha')

let browser, page;

describe('E2E tests', function () {
    this.timeout(6000);
    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it("1", async () => {
        await page.goto('http://localhost:3000/');
        await page.click("#refresh");
        const text = await page.$$eval("#messages", (arr) => arr.map(x => x.value));
        let refreshShowsAllMessages = false;
        if (text[0].includes("Spami: Hello, are you there?") && text[0].includes("Garry: Yep, whats up :?") && text[0].includes("Spami: How are you? Long time no see? :)") && text[0].includes("George: Hello, guys! :))") && text[0].includes("Spami: Hello, George nice to see you! :)))")) {
            refreshShowsAllMessages = true;
        }
        expect(refreshShowsAllMessages).to.equal(true);
    })

    it("2", async () => {
        await page.goto('http://localhost:3000/');
        await page.fill("#author", "test");
        await page.fill("#content", "test");
        await page.click("#submit");
        await page.click("#refresh");
        const text = await page.$$eval("#messages", (arr) => arr.map(x => x.value));
        let refreshShowsAllMessages = false;
        if (text[0].includes("Spami: Hello, are you there?") && text[0].includes("Garry: Yep, whats up :?") && text[0].includes("Spami: How are you? Long time no see? :)") && text[0].includes("George: Hello, guys! :))") && text[0].includes("Spami: Hello, George nice to see you! :)))") && text[0].includes("test: test")) {
            refreshShowsAllMessages = true;
        }
        expect(refreshShowsAllMessages).to.equal(true);
    })
});