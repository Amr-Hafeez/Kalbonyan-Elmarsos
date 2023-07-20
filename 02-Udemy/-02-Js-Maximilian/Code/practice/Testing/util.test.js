const puppeteer = require('puppeteer')
const {generateText, checkAndGenerate} = require('./util');

test('should output name and age', () => {
    const text = generateText('Amr', 20);
    expect(text).toBe('Amr (20 years old)');
});

test('should output ', () => {
    const text = checkAndGenerate('Amr', 20);
    expect(text).toBe('Amr (20 years old)');
});


test('Should click around', async () => {

    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });

    const page = await browser.newPage();
    await page.goto('file:///F:/Courses/Kalbonyan-Elmarsos/js-course/testing-01-starting-setup/index.html')

    await page.click('input#name');
    await page.type('input#name', 'Amr');
    await page.click('input#age');
    await page.type('input#age', '20');
    await page.click('#btnAddUser');
    // jest.setTimeout(10000);

}, 10000);

