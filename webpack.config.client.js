const path = require("path");
// import path from 'path'
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  name: "client",
  entry: {
    client: path.resolve(__dirname, "./client/client.tsx"),
  },
  mode: "production",
  output: {
    // path: path.resolve(__dirname, "dist/static"),
    path: path.join(__dirname, "dist/static/"),
    // path: "dist/static/",
    filename: "[name].[contenthash].js",
    // filename: "[name].js",
    // publicPath: "static/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.client.json",
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        },
      },
      // {
      //   test: /\.(woff(2)?)$/,
      //   // type: 'asset/resource',
      //   loader: 'file-loader',
      //   options: {
      //     name: "[name].[ext]",
      //     publicPath: 'static'
      //   }
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     // '@svgr/webpack',
      //     {
      //       loader: "@svgr/webpack",
      //       options: {
      //         typescript: true,
      //         ext: "tsx",
      //       }
      //     }
      //   ],
      // },
    ],
  },
  target: "web",
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};
