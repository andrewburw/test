const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "web/js"), // the bundle output path
   // publicPath: 'web/react',
    filename: "bundle.js", // the name of the bundle
  },
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
/*    resolve: {
    modules: [path.resolve(__dirname, 'web/react')]
   },  */
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};