const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "production",
  output: {
    filename: "assets/js/[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options:{
              url: false
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/img/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "file-loader",
        include: /assets/,
        options: {
          name: "assets/js/[name].[ext]"
        }
      }
      // url-loader
      // {
      //     test: /\.(png|jpe?g|svg)$/,
      //     use: [{
      //         loader: 'url-loader',
      //         options: {
      //             limit: 8000, // Convert images < 8kb to base64 strings
      //             name: 'img/[name].[ext]',
      //         }
      //     }]
      // }
    ]
  }
};
