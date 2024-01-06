const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  output: "export",

  basePath: "/react-shader-fiber",

  images: {
    unoptimized: true,
  },
});
