/* eslint-disable no-undef */
const path = require('path');
const { exec } = require('child_process');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = (env) => {

  const meta = {
    viewport: 'width=device-width, initial-scale=1',
    description: 'Template Webpack Application',
    subject: 'Webpack Software Website Template',
    robots: 'index,follow',
    googlebot: 'index,follow'
  };

  const config =  {
    mode: 'development',
    // Each entry will be loaded into webpage via <script> tags
    entry: {
      app: './src/entry.js',
      storage: './src/storage/entry.js'
    },
    output: {
      filename: '[name].bundle.js',
      // Need to do this because path must be absolute
      path: path.resolve(__dirname, 'public')
    },
    // Turn off for production (see https://webpack.js.org/guides/production)
    devtool: 'inline-source-map',
    devServer: {
      writeToDisk: true
    },

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
      new HtmlWebpackPlugin({
        meta,
        template: 'src/index.html',
        // Set the webpage title
        title: 'Test with Webpack Plugin',
        excludeChunks: ['storage']
      }),

      // Create new HtmlWebpackPlugin for each HTML page
      new HtmlWebpackPlugin({
        meta,
        filename: 'storage/index.html',
        template: 'src/storage/index.html',
        title: 'LocalStorage Example',
        chunks: ['storage']
      }),

      // Run Flow on Webpack Compile
      new FlowWebpackPlugin({
        failOnError: false,
        failOnErrorWatch: false,
        reportingSeverity: 'error'
      }),

      new webpack.HotModuleReplacementPlugin({}),

      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: false,
        cwd: process.cwd()
      }),

      // Force the html files to be generated to disk so they can be linted with htmlhint
      new WriteFilePlugin({
        test: /\.html$/,
        useHashIndex: true
      }),

      // Custom Script on end of Build process (this works in watch mode too)
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
            exec('./node_modules/.bin/htmlhint public', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          });
        }
      }
    ],

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [
            {
            // Use Babel to get ES6 syntax
              loader: 'babel-loader'
            },
            {
              loader: 'eslint-loader'
            }
          ]
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

  if (env && env.dev_server) {
    // not useful when running `npm run build` to generate `public` directory
    // index.html file doesn't seem to be placed `public` when these exists

    // const cleanPublicPlugin = new CleanWebpackPlugin(['public']);
    // config.plugins.push(cleanPublicPlugin);

    // Q: Why are we doing this again? I think it has to do with Karma
    // Start Webpack Dev Server Manually
    const host = '0.0.0.0';
    const port = 3030;
    WebpackDevServer.addDevServerEntrypoints(config, {
      contentBase: './public',
      hot: true,
      host,
      port
    });
    WebpackDevServer.addDevServerEntrypoints(config, {
      contentBase: './docs',
      hot: false,
      host,
      port,
      publicPath: '/docs/'
    });
    const compiler = webpack(config);
    new WebpackDevServer(compiler).listen(port, host, (err /* , result*/) => {
      if (err) {
        console.log(err);
      }
    });
  }

  return config;
};
