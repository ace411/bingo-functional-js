/**
 * _partial
 * internal partial application function on which left and right partial application are based
 *
 * _partial :: (a -> b -> c) -> [a, b] -> Bool -> (a) b
 * @param {function} func
 * @param {*} args
 * @param {boolean} left
 * @returns {function}
 */
const _partial = (func, args, left = true) => {
  const argCount = func.length

  const acc = (...inner) => (...innerMost) => {
    const final = left
      ? inner.concat(innerMost)
      : inner.reverse().concat(innerMost.reverse())

    if (argCount <= final.length) {
      return func(...final)
    }

    return acc(...final)
  }

  return acc(...args)
}

module.exports = _partial
