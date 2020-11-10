const sizeOf = require('./sizeOf')
const partition = require('./partition')

/**
 * partitionBy function
 *
 * partitionBy :: Int -> [a] -> [[a], [a]]
 * @param {number} partitionSize
 * @param {array} list
 * @returns {array}
 * @example
 *
 * partitionBy(2, [3, 4, 5, 6, 7, 9])
 * // => [[3, 4, 5], [6, 7, 9]]
 */
const partitionBy = (partitionSize, list) => {
  if (partitionSize === 0) {
    return list
  }

  const count = Math.ceil(sizeOf(list) / partitionSize)

  return partition(count, list)
}

module.exports = partitionBy
