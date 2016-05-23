'use strict'

const escapeRegExp = require('lodash.escaperegexp')

module.exports = function (str, opts) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  opts = opts || {
    replacement: ''
  }

  return str.replace(new RegExp(`[${escapeRegExp('\\/?*[]&')}]`, 'g'), '').substring(0, 31).trim()
}
