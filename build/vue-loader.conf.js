'use strict'
const utils = require('./utils')
const config = require('../config')
const pxtorem = require('postcss-pxtorem')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [pxtorem({
    rootValue: 37.5,
    unitPrecision: 5,
    propList: ['font',
    'font-size',
    'line-height',
    'letter-spacing',
    'height',
    'min-height',
    'width',
    'min-width',
    'padding*',
    'margin*',
    'top',
    'left',
    'right',
    'bottom',
    'border*'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
  })]
}
