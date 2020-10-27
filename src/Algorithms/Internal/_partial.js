const _partial = (func, args, left = true) => {
  const argCount = func.length

  const acc = (...inner) => (...innerMost) => {
    let final = left
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
