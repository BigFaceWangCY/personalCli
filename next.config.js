const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')
const webpack = require('webpack')
const GLOBAL_CONFIG = require('./config/index')
const path = require('path')
module.exports = withPlugins([
  [withCss],
  [withOptimizedImages, {
    optimizeImages: false
  }]
], {
  // set default build floder
  distDir: '../build',
  // Will be available on both server and client
  publicRuntimeConfig: {
    staticFolder: '/static',
    ...GLOBAL_CONFIG.GLOBAL_VARIABLE
  },
  webpack (config, { dev }) {
    // expose __DEV__ constant in js in dev mode
    config.plugins.push(
      new webpack.DefinePlugin({
        ...GLOBAL_CONFIG.GLOBAL_VARIABLE
      })
    )

    // alisa
    config.resolve.alias['components'] = path.join(__dirname, 'src', 'components')
    config.resolve.alias['constants'] = path.join(__dirname, 'src', 'components')
    config.resolve.alias['hooks'] = path.join(__dirname, 'src', 'hooks')
    config.resolve.alias['providers'] = path.join(__dirname, 'src', 'providers')
    config.resolve.alias['actions'] = path.join(__dirname, 'src', 'redux', 'actions')
    config.resolve.alias['reducers'] = path.join(__dirname, 'src', 'redux', 'reducers')
    config.resolve.alias['services'] = path.join(__dirname, 'src', 'services')
    config.resolve.alias['styled'] = path.join(__dirname, 'src', 'styled')
    config.resolve.alias['utils'] = path.join(__dirname, 'src', 'utils')
    config.resolve.alias['views'] = path.join(__dirname, 'src', 'views')

    return config
  }
})

const HELMET_OPTS = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      blockAllMixedContent: true,
      scriptSrc: [
        "'self'"
      ]
    }
  }
}

exports.HELMET_OPTS = HELMET_OPTS
