const fold = require('./fold')

const dropFromArray = (list, count = 1) => {
  list.splice(0, count)
  return list
}

const dropFromObject = (list, count = 1) => {
  const objectKeys = Object.keys(list)
  objectKeys.splice(0, count)

  return fold(
    (obj, key) => {
      const result = obj
      result[key] = list[key]

      return result
    },
    objectKeys,
    {},
  )
}

/**
 * dropLeft function
 *
 * dropLeft :: [a] -> Int -> [a]
 * @param {(array|object)} list
 * @param {number} count
 * @example
 *
 * dropLeft([3, 4, 6, 8], 2)
 * // => [6, 8]
 */

const dropLeft = (list, count = 1) =>
  Array.isArray(list) ? dropFromArray(list, count) : dropFromObject(list, count)

module.exports = dropLeft
