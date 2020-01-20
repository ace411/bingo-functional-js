/**
 * max function
 *
 * max :: [a] -> Int
 * @param {array} list
 * @returns {number}
 * @example
 *
 * max([8, 7, 13, 2])
 * // => 13
 */
const fold = require('./fold')
const isUndefined = require('../Function/isUndefined')

const max = (list) => {
  const res = fold((acc, val) => {
    let result = isUndefined(acc) ? 0 : acc
    result = (val > result ? val : result)

    return result
  }, list, undefined)

  return res
}

module.exports = max
