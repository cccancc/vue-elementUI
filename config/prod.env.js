'use strict'
// module.exports = {
//   NODE_ENV: '"production"'
// }
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"production"'
})