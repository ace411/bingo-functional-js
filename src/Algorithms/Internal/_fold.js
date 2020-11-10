/**
 * _fold
 * internal fold function whose versatility allows for transformation of list keys
 *
 * _fold :: (a -> b -> c -> a) -> [b] -> a -> a
 * @param {function} func
 * @param {(array|object)} list
 * @param {*} acc
 * @returns {*}
 */
const _fold = (func, list, acc) => {
  for (const property in list) {
    if (list.hasOwnProperty(property)) {
      acc = func(acc, list[property], property)
    }
  }

  return acc
}

module.exports = _fold
