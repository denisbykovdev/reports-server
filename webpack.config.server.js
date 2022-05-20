const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')

module.exports = {
  name: "server",
  entry: {
    server: path.resolve(__dirname, "server", "server.tsx"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  // exclude: {
  //   test: [ /\.(woff(2)?|ttf|eot)$/ ]
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.server.json",
        },
      },
      {
        test: /\.(woff(2)?)$/,
        // type: 'asset/resource',
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: 'fonts'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]  
  },
  target: "node",
  node: {
    __dirname: false,
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{ context: "server", from: "views", to: "views" }],
    // }),
    // new webpack.IgnorePlugin({
    //   resourceRegExp: /\.(woff(2)?)$/,
    //   contextRegExp: /\.(woff(2)?)$/
    // })
  ],
};
