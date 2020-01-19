/**
 * dropRight function
 *
 * dropRight :: [a] -> Int -> [a]
 * @param {(array|object)} list
 * @param {number} count
 * @example
 *
 * dropRight([3, 4, 6, 8], 2)
 * // => [3, 4]
 */
const dropLeft = require('./dropLeft')
const reverse = require('./reverse')

const dropRight = (list, count = 1) => reverse(dropLeft(reverse(list), count))

module.exports = dropRight
