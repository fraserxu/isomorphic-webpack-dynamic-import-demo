module.exports = {
  entry: './server.js',
  output: {
    filename: 'dist.server.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
}
