const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

const sourcePath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const plugins = [
    new HtmlWebPackPlugin({
      template: sourcePath + '/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[id].[contenthash:4].css'
    })
  ];

  if (isProd) {
    plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /\/environments\/environment\.ts/,  `${sourcePath}/environments/environment.prod.ts`
      ),
      new webpack.ProvidePlugin({
        $: "jquery",
        'jQuery': 'jquery'
      })
    );
  } else {
    plugins.push( new webpack.HotModuleReplacementPlugin(), new webpack.ProvidePlugin({
      $: "jquery",
      'jQuery': 'jquery'
    }))
  }

  const config = {
    entry: {
      app: sourcePath + '/main.ts',
    },
    output: {
      path: distPath,
      filename: '[name].bundle.[hash:4].js',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: { minimize: true }
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            {
            loader: 'style-loader', // inject CSS to page
          },
           {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
          }, {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            }
          }]
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            }
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      
    },
    plugins,
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    // devtool: 'eval-source-map',
    devServer: {
      contentBase: distPath,
      hot: true
    }
  };

  if (!isProd) {
    config.devtool = 'source-map';
  }

  return config;
};
