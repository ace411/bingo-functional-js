const firstVal = (list) => list[0]

/**
 * head function
 *
 * head :: [a, b] -> a
 * @param {(array|object)} list
 * @returns {*}
 * @example
 *
 * head(['foo', 'bar'])
 * // => 'foo'
 */
const head = (list) => (Array.isArray(list) ? firstVal(list) : firstVal(Object.values(list)))

module.exports = head
