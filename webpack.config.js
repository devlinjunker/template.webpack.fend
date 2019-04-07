const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FlowWebpackPlugin = require('flow-webpack-plugin')

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config =  {
  mode: 'development',
  // Each entry will be loaded into webpage via <script> tags
  entry: {
    app: "./src/entry.js",
  },
  output: {
    filename: "[name].bundle.js",
    // Need to do this because path must be absolute
    path: path.resolve(__dirname, "public")
  },
  // Turn off for production (see https://webpack.js.org/guides/production)
  devtool: "inline-source-map",

  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      // TODO: Do we want these?
      // App: path.resolve(__dirname,'src/app'),
      // Images: path.resolve(__dirname, "src/img")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      // Set the webpage title
      title:"Test with Webpack Plugin"
    }),

    // Run Flow on Webpack Compile
    new FlowWebpackPlugin({
      failOnError: false,
      failOnErrorWatch: false,
      reportingSeverity: 'error'
    }),

    new webpack.HotModuleReplacementPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          // Use Babel to get ES6 syntax
          loader: 'babel-loader'
        }, {
          loader: "eslint-loader"
        }]
      },

      // Load css files imported
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // Load images imported
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};

module.exports = config;

// Start Webpack Dev Server Manually
const host = '0.0.0.0';
const port = 3000;
WebpackDevServer.addDevServerEntrypoints(config, {
  contentBase: "./public",
  hot: true,
  host,
  port
});
const compiler = webpack(config);
new WebpackDevServer(compiler).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }
});
