/**
 * mean function
 *
 * mean :: [a] -> Float
 * @param {(array|object)} list
 * @returns {number}
 * @example
 *
 * mean([2, 7, 9])
 * // => 6
 */
const sizeOf = require('./sizeOf')
const fold = require('./fold')

const mean = (list) => {
  const sum = fold((acc, val) => {
    let result = acc
    result += val

    return result
  }, list, 0)

  return sum / sizeOf(list)
}

module.exports = mean
