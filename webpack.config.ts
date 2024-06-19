import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
  // container
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

// const { ModuleFederationPlugin } = container;

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@components": path.resolve("./src/components"),
      "@utils": path.resolve("./src/utils"),
      "@common-types": path.resolve("./src/common-types"),
      "@constants": path.resolve("./src/constants"),
    },
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: process.env.NODE_ENV !== "production",
            },
          },
          {
            loader: "postcss-loader", // Processes CSS with PostCSS.
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
            },
          },
        ],
      },
      {
        test: fontsExtension,
        type: "asset",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      {
        test: imageExtensions,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/1-static/assets-cn", to: "1-static/assets-cn" },
        { from: "./public/1-static/favicon", to: "1-static/favicon" },
        { from: "./public/1-static/fonts", to: "1-static/fonts" },
        { from: "./public/1-static/configs", to: "1-static/configs" },
      ],
    }),
    // new ModuleFederationPlugin({
    //   name: "cockpit-n",
    //   remotes: {
    //      app2: "app2@https://nonprod.nxt.pe/auth-n-fe/remoteEntry.js",
    //     // app2: "app2@http://localhost:8888/remoteEntry.js",
    //   },
    //   shared: {
    //     react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
    //     "react-dom": {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: "^18.2.0",
    //     },
    //     "react-router-dom": {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: "^6.11.1",
    //     },
    //   },
    // }),
  ],
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 8087,
    hot: true,
  },
};

export default config;
