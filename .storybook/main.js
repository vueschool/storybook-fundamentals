module.exports = {
  stories: ["../components/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: config => {
    config.module.rules.push({
      test: /.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")]
          }
        }
      ]
    });
    return config;
  }
};
