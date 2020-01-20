/**
 * filter function
 *
 * filter :: (a -> Bool) -> [a] -> [a]
 * @param {function} func
 * @param {(array|object)} list
 * @returns {*}
 * @example
 *
 * filter((x) => x % 2 === 0, [2, 9, 3, 14])
 * // => [2, 14]
 */
const sizeOf = require('./sizeOf')

const filterArray = (func, list) => {
  const result = []

  for (let idx = 0; idx < sizeOf(list); idx += 1) {
    if (func(list[idx])) result.push(list[idx])
  }

  return result
}

const filterObj = (func, list) => {
  const result = {}

  for (const [key, value] of Object.entries(list)) {
    if (func(value)) {
      result[key] = value
    }
  }

  return result
}

const filter = (func, list) => (Array.isArray(list)
  ? filterArray(func, list)
  : filterObj(func, list))

module.exports = filter
