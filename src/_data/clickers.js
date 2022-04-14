const getimage = require('@zvorak/getimage');

module.exports = async function () {
    return [
        {
            class: 'te20',
            clickers: [
                {
                    title: 'Fossiljägaren',
                    tagline: 'Gräv gräv gräv',
                    url: 'https://jensnti.github.io/clicker/',
                    git: 'https://github.com/jensnti/clicker',
                    author: 'Jens',
                    image: await getimage(
                        'https://jensnti.github.io/clicker/',
                        './src/previews'
                    ),
                }
            ],
        },
    ];
};
