const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './js/src/app.ts', 
  output: {
    path: path.resolve(__dirname, 'js'),  
    filename: 'app.js', 
    publicPath: '/modules/custom/drupal_vue_integration/js/' 
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],  
    alias: {
      'vue$': 'vue/dist/vue.esm.js'  
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,  
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,  
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()  
  ]
};