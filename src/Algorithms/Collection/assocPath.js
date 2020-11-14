const assoc = require('./assoc')
const isJsonObject = require('../Function/isJsonObject')
const dropLeft = require('./dropLeft')
const head = require('./head')
const pluck = require('./pluck')
const sizeOf = require('./sizeOf')

/**
 * assocPath
 *
 * assocPath :: [a] -> b -> [b] -> [b]
 * @param {array} path
 * @param {*} val
 * @param {(array|object)} list
 * @returns {(array|object)}
 * @example
 *
 * assocPath(['x', '1'], 2, { x: ['foo', 'bar'], y: 'baz' })
 * // => { x: ['foo', 2], y: 'baz' }
 */
const assocPath = (path, val, list) => {
  const pathlen = sizeOf(path)

  if (pathlen === 0) {
    return list
  }

  let idx = head(path)
  if (pathlen > 1) {
    let next = pluck(list, idx)

    if (isJsonObject(next) || Array.isArray(next)) {
      val = assocPath(dropLeft(path, 1), val, next)
    }
  }

  return assoc(idx, val, list)
}

module.exports = assocPath
