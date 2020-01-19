/**
 * keysExist function
 *
 * keysExist :: [a, b] -> [String] -> Bool
 * @param {(array|object)} haystack
 * @param {array} needles
 * @returns {boolean}
 * @example
 *
 * keysExist(['foo', 'bar', 'baz'], ['0', '2'])
 * // => true
 */

const sizeOf = require('./sizeOf')
const filter = require('./filter')
const keyExists = require('./keyExists')

const keysExist = (haystack, needles) => {
  const keySize = sizeOf(needles)
  const matches = filter(
    (key) => keyExists(haystack, key),
    needles,
  )

  return sizeOf(matches) === keySize
}

module.exports = keysExist
