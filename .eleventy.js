const Navbar = require("./src/_includes/components/Navbar");

module.exports = function (eleventyConfig) {
  // Stylesheets
  eleventyConfig.addPassthroughCopy("styles/");
  eleventyConfig.addWatchTarget("styles/");

  // Scripts
  eleventyConfig.addPassthroughCopy("scripts/");
  eleventyConfig.addWatchTarget("scripts/");

  // Assets
  eleventyConfig.addPassthroughCopy("assets/");

  // Components
  eleventyConfig.addShortcode("Navbar", Navbar);

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
