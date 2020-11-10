const isJsonObject = require('../Function/isJsonObject')
const isUndefined = require('../Function/isUndefined')
const fold = require('./fold')

/**
 * pluckPath
 *
 * pluckPath :: [a] -> [b] -> c -> b
 * @param {array} path
 * @param {(array|object)} list
 * @param {*} def
 * @returns {*}
 * @example
 *
 * pluckPath(['x', 'foo'], {x: { foo: 2 }})
 * // => 2
 */
const pluckPath = (path, list, def = undefined) => fold(
  (acc, key) => {
    if (isJsonObject(acc) || Array.isArray(acc)) {
      acc = acc[key]
    }

    return isUndefined(acc) ? def : acc
  },
  path,
  list,
)

module.exports = pluckPath
