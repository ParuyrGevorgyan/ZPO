const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         crypto: require.resolve('crypto-browserify'),
//         "path": require.resolve("path-browserify"),
//         "stream": require.resolve("stream-browserify"),
//         "http": require.resolve("stream-http"),
//         "zlib": require.resolve("browserify-zlib"),
//         "assert": require.resolve("assert/"),
//         "url": require.resolve("url/"),
//         "querystring": require.resolve("querystring-es3"),
//         // "fs": false,
//         // "net": false,
//       }
//     }
//   }
// }