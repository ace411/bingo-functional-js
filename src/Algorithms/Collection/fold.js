const _fold = require('../Internal/_fold')
/**
 * fold function
 *
 * fold :: (a -> b -> a) -> [b] -> a -> a
 * @param {function} func
 * @param {(array|object)} list
 * @param {*} acc
 * @returns {*}
 * @example
 *
 * fold((acc, val) => acc + val, [1, 2], 0)
 * // => 3
 */
const fold = (func, list, acc) => _fold(func, list, acc)

module.exports = fold
