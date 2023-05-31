const getimage = require('@zvorak/getimage');

process.setMaxListeners(0);

const urls = [
    'https://alfredengberg.github.io/wu1-clicker-voices/',
    'https://endaxe.github.io/wu1-clicker/',
    'https://gabbe16.github.io/wu1-clicker/',
    'https://jacobtwentyone.github.io/wu1-clicker/',
    'https://mephit299.github.io/wu1-clicker/',
    'https://l1nu5-21.github.io/wu1-clicker/',
    'https://pissoarsniffare.github.io/wu1-clicker/',
];
const previewPath = './src/previews';

urls.forEach(async (url, index) => {
    await getimage(url, previewPath)
        .then((fname) => {
            console.log(`${fname} fetched from ${url}`);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log('\n');
        });
});
