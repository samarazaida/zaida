const path = require('path');
const fs = require('fs');

const { theme, styles } = require('./docs/styleguide/styles');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['airbnb']
          }
        },
        {
          test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {

          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader",
            }
          ]

        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ],
    },
  },
  title: 'Zaida',
  sections: [
    {
      name: 'React components',
      components: 'src/**/index.js'
    }
  ],
  require: [
    resolve('docs/styleguide/styles.css'),
  ],
  theme,
  styles,
  template: {
    favicon: 'https://assets-cdn.github.com/favicon.ico',
  },
  skipComponentsWithoutExample: true,
  showCode: true,
  styleguideComponents: {
    Wrapper: resolve('docs/styleguide/WrapperDoc.js'),
  },
  pagePerSection: true
};
