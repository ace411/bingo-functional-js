const fold = require('./fold')
const head = require('./head')

/**
 * min function
 *
 * min :: [a] -> Int
 * @param {(array|object)} list
 * @returns {number}
 * @example
 *
 * min([8, 7, 13, 2])
 * // => 2
 */
const min = (list) => fold((acc, val) => (val < acc ? val : acc), list, head(list))

module.exports = min
