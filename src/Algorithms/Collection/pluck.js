/**
 * pluck function
 *
 * pluck :: Object k v -> k -> [v]
 * @param {(array|object)} haystack
 * @param {*} needle
 * @returns {array}
 *
 * pluck({ a: 2, b: 3, c: { a: 5, d: 12 } }, 'a')
 * // => [2, 5]
 */
const filter = require('./filter')
const flatten = require('./flatten')
const { isJsonObject } = require('../Function')

const pluck = (haystack, needle) => {
  const plucked = []

  for (const [key, value] of Object.entries(haystack)) {
    plucked.push(isJsonObject(value) || Array.isArray(value)
      ? pluck(value, needle)
      : (key === needle && value))
  }

  return filter((val) => val !== false, flatten(plucked))
}

module.exports = pluck
