const puppeteer = require('puppeteer');
const fs = require('fs');

const hashCode = (s) =>
    s.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);

const getScreenshot = async (url, path) => {
    await puppeteer
        .launch({
            defaultViewport: {
                width: 1280,
                height: 720,
                isLandscape: true,
            },
            args: ['--no-sandbox'],
        })
        .then((browser) => {
            browser
                .newPage()
                .then(async (page) => {
                    await page.goto(url);
                    await page.screenshot({
                        path: path,
                        fullPage: true,
                        type: 'png',
                    });
                    await browser.close();
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .finally(() => {
            console.log('done');
        });
};

const generatePreview = (url) => {
    const filename = `t${hashCode(url)}.png`;
    const path = `./src/previews/${filename}.png`;
    try {
        if (fs.existsSync(path)) {
            console.log('File exists');
            return filename;
        } else {
            console.log('generatePreview');
            getScreenshot(url, path).then(() => {
                console.log('done');
            });
        }
    } catch (err) {
        console.error(err);
    }
};

module.exports = [
    {
        class: 'te20',
        clickers: [
            {
                title: 'Fossiljägaren',
                tagline: 'Gräv gräv gräv',
                url: 'https://jensnti.github.io/clicker/',
                git: 'https://github.com/jensnti/clicker',
                author: 'Jens',
                thumbnail: generatePreview(
                    'https://jensnti.github.io/clicker/'
                ),
            },
            {
                title: 'example2',
                tagline: 'example2',
                url: 'https://example2.com',
                git: 'github.com',
                author: 'example2',
                thumbnail: generatePreview('https://example2.com'),
            },
            {
                title: 'example',
                tagline: 'example',
                url: 'https://example.com',
                git: 'github.com',
                author: 'example',
                thumbnail: generatePreview('https://example.com'),
            },
        ],
    },
];
