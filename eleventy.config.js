import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Zorgt dat alle links "/..." correct werken onder het GitHub Pages-pad (/<repo>/)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Lettertypes lokaal hosten (geen Google Fonts = geen extra cookies/tracking)
  const fonts = {
    "cormorant-500": "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2",
    "cormorant-600": "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2",
    "inter-400": "@fontsource/inter/files/inter-latin-400-normal.woff2",
    "inter-500": "@fontsource/inter/files/inter-latin-500-normal.woff2",
    "inter-600": "@fontsource/inter/files/inter-latin-600-normal.woff2",
  };
  for (const [name, file] of Object.entries(fonts)) {
    eleventyConfig.addPassthroughCopy({ [`node_modules/${file}`]: `assets/fonts/${name}.woff2` });
  }

  eleventyConfig.addFilter("telHref", (s) => "tel:" + String(s).replace(/[^+\d]/g, ""));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
