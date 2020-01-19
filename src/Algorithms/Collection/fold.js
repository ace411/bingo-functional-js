/**
 * fold function
 * 
 * fold :: (a -> b -> a) -> [b] -> a -> a 
 * @param {function} func 
 * @param {(array|object)} list 
 * @param {*} acc 
 * @returns {*}
 * @example
 * 
 * fold((acc, val) => acc + val, [1, 2], 0)
 * // => 3
 */
const fold = (func, list, acc) => {
  const objectValues = Object.values(list)
  let result = acc

  for (let idx = 0; idx < objectValues.length; idx += 1) {
    result = func(result, objectValues[idx])
  }

  return result
}

module.exports = fold
