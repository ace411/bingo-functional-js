const head = require('./head')
const last = require('./last')
const sizeOf = require('./sizeOf')
const _fold = require('../Internal/_fold')

/**
 * fromPairs function
 *
 * fromPairs :: [[k, v]] -> Object k v
 * @param {array} list
 * @returns {object}
 * @example
 *
 * fromPairs([['foo', 'bar'], ['baz', 'fooz']])
 * // => { foo: 'bar', baz: 'fooz' }
 */
const fromPairs = (list) =>
  _fold(
    (acc, val) => {
      if (Array.isArray(val) && sizeOf(val) == 2) {
        acc[head(val)] = last(val)
      }

      return acc
    },
    list,
    {},
  )

module.exports = fromPairs
