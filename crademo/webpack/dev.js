const path = require("path");
const webpack = require("webpack");

const { merge } = require("webpack-merge");
const common = require("./common.js");

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
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
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
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
          {
            loader: "style-loader",
          },
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
          //从包含CSS的JS代码中 创建 `style` 节点
          {
            loader: "style-loader",
          },
          // 将 CSS 转换为 CommonJS 格式的JS代码
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          // 将 Sass 转换为 CSS
          {
            loader: "sass-loader",
          },
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 8001,
    hot: true,
  }
});
