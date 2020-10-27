const _fold = (func, list, acc) => {
  for (const property in list) {
    acc = func(acc, list[property], property)
  }

  return acc
}

module.exports = _fold
