const Navbar = require("./src/_includes/components/Navbar");
const Hero = require("./src/_includes/components/Hero");
const Definition = require("./src/_includes/components/Definition");

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
  eleventyConfig.addShortcode("Hero", Hero);
  eleventyConfig.addShortcode("Definition", Definition);

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
