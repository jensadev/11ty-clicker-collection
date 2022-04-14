const Image = require('@11ty/eleventy-img');

function imageShortcode(src, alt, sizes) {
    let options = {
        widths: [300, 600],
        formats: ['png'],
        outputDir: './public/assets/',
        urlPath: '/assets/',
    };

    // generate images, while this is async we don’t wait
    Image(src, options);

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };
    // get metadata even the images are not fully generated
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');

    eleventyConfig.addPassthroughCopy('src/assets/');

    eleventyConfig.addNunjucksShortcode('image', imageShortcode);

    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
