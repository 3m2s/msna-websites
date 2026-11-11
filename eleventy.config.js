import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import sites from "./src/_data/sites.js";

// "site:pagina" + taal -> URL, bv. msnaUrl("cleaning:contact", "en") -> /cleaning/en/contact/
export function msnaUrl(ref, lang) {
  const [siteKey, pageKey = "home"] = String(ref).split(":");
  const s = sites[siteKey];
  if (!s) throw new Error("msnaUrl: onbekende site " + siteKey);
  const l = s.langs.includes(lang) ? lang : s.langs[0];
  const slug = s.slugs[pageKey]?.[l];
  if (slug === undefined) throw new Error("msnaUrl: onbekende pagina " + ref + " (" + l + ")");
  if (slug.startsWith("/")) return slug;
  return s.base + (s.rootLang === l ? "" : l + "/") + slug;
}

export default function (eleventyConfig) {
  // Zorgt dat alle links "/..." correct werken onder het GitHub Pages-pad (/<repo>/)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Eigen stijl, script en logo van de MODE-site
  eleventyConfig.addPassthroughCopy("src/mode/assets");

  // Lettertypes lokaal hosten (geen Google Fonts = geen extra cookies/tracking)
  const fonts = {};
  // Bodoni Moda + Jost voor alle MSNA-sites
  for (const w of [400, 500, 600, 700]) {
    fonts[`bodoni-${w}`] = `@fontsource/bodoni-moda/files/bodoni-moda-latin-${w}-normal.woff2`;
  }
  fonts["bodoni-500-italic"] = "@fontsource/bodoni-moda/files/bodoni-moda-latin-500-italic.woff2";
  for (const w of [300, 400, 500, 600]) {
    fonts[`jost-${w}`] = `@fontsource/jost/files/jost-latin-${w}-normal.woff2`;
  }
  for (const [name, file] of Object.entries(fonts)) {
    eleventyConfig.addPassthroughCopy({ [`node_modules/${file}`]: `assets/fonts/${name}.woff2` });
  }

  eleventyConfig.addFilter("msnaUrl", msnaUrl);
  eleventyConfig.addFilter("telHref", (s) => "tel:" + String(s).replace(/[^+\d]/g, ""));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
