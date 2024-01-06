import codeImport from "remark-code-import";
import nextra from 'nextra';

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
    mdxOptions: {
        remarkPlugins: [codeImport],
    },
});

export default withNextra({
  output: "export",

  basePath: "/react-shader-fiber",

  images: {
    unoptimized: true,
  },
});
