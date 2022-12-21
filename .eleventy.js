const Navbar = require("./src/_includes/components/Navbar");
const Hero = require("./src/_includes/components/Hero");
const Definition = require("./src/_includes/components/Definition");
const Articles1 = require("./src/_includes/components/Articles1");
const Articles2 = require("./src/_includes/components/Articles2");
const Articles3 = require("./src/_includes/components/Articles3");
const Articles4 = require("./src/_includes/components/Articles4");
const Examples = require("./src/_includes/components/Examples");

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
  eleventyConfig.addShortcode("Articles1", Articles1);
  eleventyConfig.addShortcode("Articles2", Articles2);
  eleventyConfig.addShortcode("Articles3", Articles3);
  eleventyConfig.addShortcode("Articles4", Articles4);
  eleventyConfig.addShortcode("Examples", Examples);

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
