const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const pack = require('./package.json');
const meta = require('./src/meta.json');

/**
 * Macros for underscore-template-loader (see src/static/README.static.md)
 * @type {Object}
 */
const macros = {
  year: () => {
    const year = new Date().getFullYear();

    return `'${ year }'`;
  },
  datetime: () => {
    const datetime = new Date().toString();

    return `'${ datetime }'`;
  },
  commit: () => {
    const branch = 'footer';
    let commit = fs.readFileSync(
      path.join(__dirname, `.git/refs/heads/${branch}`),
      { encoding: 'UTF-8' }
    );
    commit = commit.replace(/\n/g, '');

    return `'${ commit }'`;
  },

  branch: () => {
    const HEAD = fs.readFileSync(
      path.join(__dirname, '.git/HEAD'),
      { encoding: 'UTF-8' }
    );
    const split = HEAD.split('/');
    const branch = split[split.length - 1].replace(/\n/g, '');

    return `'${ branch }'`;
  },

  githubImg: () => {
    let repo;
    if (pack.repository && pack.repository.url) {
      repo = pack.repository.url;
    }
    if (repo === undefined) {
      return '""';
    }
    // eslint-disable-next-line max-len
    return `'<a href="${ repo }"><img width="20px" src="' + require('img/github.png') + '"/></a>'`;
  }
};

/**
 * Builds the webpack config and enables the dev server if `env.dev_server` is set (TODO: change to node env?)
 * @param  {[type]} env env property contianing build info (from karma.conf.js)
 * @return {WebpackConfig}     Webpack Config object
 */
module.exports = (env) => {

  const config =  {
    mode: 'development',
    // Each entry will be loaded into webpage via <script> tags
    entry: {
      app: './src/entry.js',
      storage: './src/storage/entry.js',
      todo: './src/todo/entry.js'
    },
    output: {
      filename: '[name].bundle.js',
      // Need to do this because path must be absolute
      path: path.resolve(__dirname, 'public')
    },

    // TODO: Turn off for production (see https://webpack.js.org/guides/production)
    devtool: 'inline-source-map',

    resolve: {
      extensions: ['.js'],
      modules: ['node_modules'],
      alias: {
        img: path.resolve(__dirname, 'img')
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
        excludeChunks: ['storage', 'todo']
      }),

      // Create new HtmlWebpackPlugin for each HTML page
      new HtmlWebpackPlugin({
        meta,
        filename: 'storage/index.html',
        template: 'src/storage/index.html',
        title: 'LocalStorage Example',
        chunks: ['storage']
      }),
      new HtmlWebpackPlugin({
        meta,
        filename: 'todo/index.html',
        template: 'src/todo/index.html',
        title: 'TODO Example',
        chunks: ['todo']
      }),

      // Force the html files to be generated to disk so they can be linted with htmlhint
      new WriteFilePlugin({
        test: /\.(html|hbs)$/,
        useHashIndex: true
      }),

      new MiniCssExtractPlugin(),

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
          test: /\.s?css$/,
          use: [
            // Q: Should we do this during development and then use mini-css-extract-plugin
            // during production?
            // {
            //   loader: 'style-loader',
            // },
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            },
          ]
        },

        // Load images imported
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: ['file-loader']
        },

        {
          test: /\.svg$/,
          use: ['svg-inline-loader']
        },

        {
          test: /\.(html)$/,
          use: [
            {
              loader: 'underscore-template-loader',
              options: {
                macros
              }
            },
            // Custom loader to inline svgs during the build after underscore-template-loader
            { loader: path.resolve(__dirname, '.webpack', 'svg-pre-loader') },
          ]
        },

        // Process HBS files properly when imported to javascript files
        {
          test: /\.(hbs)$/,
          // Loaders are weird and process in bottom-to-top order (last-to-first)
          // we want to inline svg icons with @include() so we should use underscore first here
          use: [
            { loader: 'handlebars-loader' },
            // Custom loader to inline svgs during the build after underscore-template-loader
            { loader: path.resolve(__dirname, '.webpack', 'svg-pre-loader') },
            // {
            //   loader: 'underscore-template-loader',
            //   options: {
            //     macros
            //   }
            // },
          ]
        }
      ]
    },
  };

  if (env && env.dev_server) {
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
