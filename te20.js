const getimage = require('@zvorak/getimage');

process.setMaxListeners(0);

const urls = [
    'https://albertsparrman.github.io/Clicker/',
    'https://aragorn173.github.io/Clicker/',
    'https://alex-mp4.github.io/wu1-clicker/',
    'https://indianeen.github.io/BiasClicker/',
    'https://hjalmar-lundmark.github.io/wu1-Clicker/',
    'https://isacnti.github.io/clicker/',
    'https://pppog.github.io/Clicker/',
    'https://tyrkiskpeber.github.io/Clicker/',
    'https://maxalbinsson.github.io/Clicker/',
    'https://natistuomi.github.io/wu1-clicker/',
    'https://kaz-akhstan.github.io/clicker/',
    'https://beepingseath.github.io/wu1-Clicker/',
    'https://timpan42.github.io/clickerspel/',
    'https://timnilsson04.github.io/MinecraftClicker/',
    'https://nosskire1.github.io/clicker/',
    'https://tyckobra.github.io/clicker/',
    'https://oscan099.github.io/Taiclicker/',
    'https://lekzy2.github.io/Poto-clicker/',
    'https://lukas-johansson.github.io/Progamerclickerpoggers/',
    'https://rallve.github.io/wu1-clicker/',
    'https://eh2o.github.io/clickergame/',
    'https://nizardawood.github.io/Clicker/'
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