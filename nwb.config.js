module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    extra: {
      module: {
        rules: [
          {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
          },
        ]
      }
    },
    rules: {
      babel: {
        test: /\.jsx?/,
        presets: ["airbnb"]
      },
    }
  }
}
