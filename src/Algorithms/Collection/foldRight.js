/**
 * foldRight function
 *
 * foldRight :: (a -> b -> a) -> [b] -> a -> a
 * @param {function} func
 * @param {(array|object)} list
 * @param {*} acc
 * @returns {*}
 * @example
 *
 * foldRight((acc, val) => acc + val, [1, 2], 0)
 * // => 3
 */
const fold = require('./fold')
const reverse = require('./reverse')

const foldRight = (func, list, acc) => fold(func, reverse(list), acc)

module.exports = foldRight
