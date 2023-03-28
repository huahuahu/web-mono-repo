const { composePlugins, withNx } = require("@nrwl/webpack");
const { withReact } = require("@nrwl/react");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

const path = require("path");

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  if (process.env.MOBILE === "true") {
    // The output is only one file, so we need to inline the CSS and JS
    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        inlineSource: ".*$",
        scriptLoading: "blocking",
        chunks: "all",
        chunksSortMode: (a, b) => {
          const order = ["polyfills", "other", "main"];
          const orderOther = 1;
          const orderA = order.includes(a) ? order.indexOf(a) : orderOther;
          const orderB = order.includes(b) ? order.indexOf(b) : orderOther;
          return orderA - orderB;
        },
        template: path.join(__dirname, "src/index.html"),
        minify: {
          minifyJS: false,
        },
      })
    );

    config.plugins.push(new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/.*/]));

    config.plugins.push(new HTMLInlineCSSWebpackPlugin());
  }

  return config;
});
