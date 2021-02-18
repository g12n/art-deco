let settings = {
    markdownTemplateEngine: "njk", 
}
module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget("./**/*.svg");
    eleventyConfig.addWatchTarget("./**/*.css");
    eleventyConfig.addWatchTarget("./**/*.json");

    return settings;
}