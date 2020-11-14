const _fold = require('../Internal/_fold')

/**
 * assoc
 *
 * assoc :: a -> b -> [b] -> [b]
 * @param {*} key
 * @param {*} val
 * @param {(object|array)} list
 * @returns {(object|array)}
 * @example
 *
 * assoc('foo', 2, { bar: 'bar', foo: 'foo' })
 * // => { bar: 'bar', foo: 2 }
 */
const assoc = (key, val, list) =>
  _fold(
    (acc, entry, idx) => {
      if (key === idx) {
        acc[idx] = entry
      }

      acc[key] = val

      return acc
    },
    list,
    list,
  )

module.exports = assoc
