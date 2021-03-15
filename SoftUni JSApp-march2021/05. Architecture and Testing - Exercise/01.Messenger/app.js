function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;

        await sendMessage({author, content});

        document.getElementById('author').value = '';
        document.getElementById('content').value = '';
    });

    document.getElementById('refresh').addEventListener('click', getMessages);
}

attachEvents();


async function getMessages() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');
    document.getElementById('messages').value = messages;
}

async function sendMessage(message) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    });
    const data = await response.json();
}

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const { describe } = require('mocha')

let browser, page;

describe('E2E test', () => {
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
    })

    it('1', () => {
        
    });
});