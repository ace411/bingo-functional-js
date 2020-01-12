const fold = (func, list, acc) => {
  for (const property in list) {
    const val = list[property]

    acc = func(acc, val)
  }

  return acc
}

module.exports = fold
