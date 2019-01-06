var config = require('../../config')
var devWebpackConfig = require('../webpack.dev.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var entry = config.docDev.entry
// add hot-reload related code to entry chunks
Object.keys(entry).forEach(function (name) {
  entry[name] = ['./build/dev-client'].concat(entry[name])
})

var demoDevWebpackConfig = Object.assign({}, devWebpackConfig)
var index = demoDevWebpackConfig.plugins.findIndex(function (plugin) {
  return plugin instanceof HtmlWebpackPlugin
})
demoDevWebpackConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
  filename: 'index.html',
  template: config.demoDev.template,
  inject: true
}))

demoDevWebpackConfig.entry = entry

module.exports = demoDevWebpackConfig
