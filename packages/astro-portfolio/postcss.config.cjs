const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      enableClientSidePolyfills: false,
      features: {
        'nesting-rules': true
      }
    })
  ]
}
