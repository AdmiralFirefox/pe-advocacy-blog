module.exports = function (eleventyConfig) {
  // Stylesheets
  eleventyConfig.addPassthroughCopy("styles/");
  eleventyConfig.addWatchTarget("styles/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
