const path = require("path");
const glob = require('glob');
const { merge } = require("webpack-merge");
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IgnorePlugin } = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const common = require("./common.js");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
      {
        test: /\.less$/i,
        exclude: path.resolve(__dirname, "../src/app.less"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.less$/i,
        include: path.resolve(__dirname, "../src/app.less"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#1DA57A',
                  'link-color': '#1DA57A',
                  'border-radius-base': '2px',
                },
                javascriptEnabled: true
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ]
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "",
    path: path.resolve(__dirname, "../dist"),
    // 打包前清空输出目录
    clean: true,
  },
  optimization:{
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4,
      }),
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        thirdLib: {
          name: 'thirdLib',
          test: /[\\/]node_modules[\\/](?!antd)(?!moment)/,
          priority: -10,
        },
        antd: {
          name: 'antd',
          test: /[\\/]node_modules[\\/]antd[\/]/,
          priority: 20,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`,  { nodir: true }),
    }),
    new IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new CompressionPlugin({
      filename: '[path][base].gz', // 输出目标文件名
      algorithm: 'gzip', // 压缩格式
      test: new RegExp('\\.(js|css)$'), // 要处理的文件正则
      threshold: 0, // 仅处理大于此大小的文件（以字节为单位）
      minRatio: 0.8, // 仅处理压缩比此比率更好的文件（minRatio = 压缩大小/原始大小）
      deleteOriginalAssets: false // 是否删除原有文件
    })
  ]
});
