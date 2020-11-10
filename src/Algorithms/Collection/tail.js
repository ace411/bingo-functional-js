const dropLeft = require('./dropLeft')

/**
 * tail function
 *
 * tail :: [a] -> [a]
 * @param {(array|object)} list
 * @returns {(array|object)}
 * @example
 *
 * tail(['foo', 'bar', 'baz'])
 * // => ['bar', 'baz']
 */
const tail = (list) => dropLeft(list, 1)

module.exports = tail
