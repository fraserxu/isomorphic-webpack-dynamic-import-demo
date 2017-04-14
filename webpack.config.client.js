module.exports = {
  entry: './client.js',
  output: {
    filename: 'dist.client.js',
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
