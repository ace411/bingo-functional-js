/**
 * toPairs function
 *
 * toPairs :: Object k v -> [[k, v]]
 * @param {object} object
 * @returns {array}
 * @example
 *
 * toPairs({ foo: 'bar', baz: 'fooz' })
 * // => [['foo', 'bar'], ['baz', 'fooz']]
 */
const toPairs = (object) => {
  const result = []

  for (const [key, value] of Object.entries(object)) {
    result.push([key, value])
  }

  return result
}

module.exports = toPairs
