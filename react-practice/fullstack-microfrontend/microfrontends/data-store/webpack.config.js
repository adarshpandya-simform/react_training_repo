const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "data_store",
      filename: "remoteEntry.js",
      remotes: {
        data_store: "data_store@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./RQWrapper": "./src/components/QueryClientWrapper.jsx",
        "./useCreateUser": "./src/hooks/useCreateUser.js",
        "./useDeleteUser": "./src/hooks/useDeleteUser.js",
        "./useMarriedUsers": "./src/hooks/useMarriedUsers.js",
        "./useNotMarriedUsers": "./src/hooks/useNotMarriedUsers.js",
        "./useUpdateUser": "./src/hooks/useUpdateUser.js",
        "./useUser": "./src/hooks/useUser.js",
        "./useUsers": "./src/hooks/useUsers.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
