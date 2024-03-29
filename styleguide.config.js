module.exports = {
  // set your styleguidist configuration here
  title: "Default Style Guide",
  version: "Ver 1.0.0.0",
  components: ["src/components/**/[A-Z]*.vue", "src/views/**/[A-Z]*.vue"],
  defaultExample: true,
  sections: [
    {
      name: "First Section",
      components: "src/components/**/[A-Z]*.vue",
    },
    {
      name: "Second Section",
      components: "src/views/**/[A-Z]*.vue",
    },
  ],
  webpackConfig: {
    // custom config goes here
  },
  exampleMode: "expand",
};
