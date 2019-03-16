const webpack = require("webpack");
const path = require("path");
const paths = require("path");

module.exports = {
  mode: "development",
  context: __dirname + "/src",
  entry: path.resolve("./src/AppClimateMeasures.jsx"),
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: { path: path.resolve("./static"), filename: "app.bundle.js" },

  //   module: {
  //     loaders: [
  //       {
  //         // test: /\.jsx$/,
  //         loader: "babel-loader",
  //         query: { presets: ["react", "es2015"] }
  //       }
  //     ]
  //   },

  //   module: {
  //     rules: [
  //       {
  //         test: /\.jsx$/,
  //         use: [
  //           {loader: 'babel-loader'},

  //         ],
  //         exclude: /node_modules/
  //       }
  //     ]
  //   }

  //   module: {
  //     rules: [
  //       // Disable require.ensure as it's not a standard language feature.
  //       { parser: { requireEnsure: false } },

  //       // First, run the linter.
  //       // It's important to do this before Babel processes the JS.
  //     //   {
  //     //     test: /\.(js|mjs|jsx)$/,
  //     //     enforce: "pre",
  //     //     use: [
  //     //       {
  //     //         options: {
  //     //           formatter: require.resolve("react-dev-utils/eslintFormatter"),
  //     //           eslintPath: require.resolve("eslint"),
  //     //           // @remove-on-eject-begin
  //     //           baseConfig: {
  //     //             extends: [require.resolve("eslint-config-react-app")]
  //     //           },
  //     //           ignore: false,
  //     //           useEslintrc: false
  //     //           // @remove-on-eject-end
  //     //         },
  //     //         loader: require.resolve("eslint-loader")
  //     //       }
  //     //     ],
  //     //     include: paths.appSrc
  //     //   },
  //       // Process application JS with Babel.
  //       // The preset includes JSX, Flow, TypeScript, and some ESnext features.
  //       {
  //         test: /\.(js|mjs|jsx|ts|tsx)$/,
  //         include: paths.appSrc,
  //         loader: require.resolve("babel-loader"),
  //         options: {
  //           customize: require.resolve(
  //             "babel-preset-react-app/webpack-overrides"
  //           ),
  //           // @remove-on-eject-begin
  //           babelrc: false,
  //           configFile: false,
  //         //   presets: [require.resolve("babel-preset-react-app")],
  //         //   presets: ["react","es2015"],
  //         presets: [
  //             [
  //               require.resolve('babel-preset-react-app/dependencies'),
  //               { helpers: true },
  //             ],
  //           ],

  //         }
  //       }
  //     ]
  //   }

  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.(js|jsx)$/,
        include: path.resolve("./src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
            //   presets: ["react"]
            // presets: [require.resolve('babel-preset-react-app/dependencies')] // with this line present, must call webpack like so: BABEL_ENV=development ./node_modules/.bin/webpack
            }
          }
        ]
      }
    ]
  }
};
