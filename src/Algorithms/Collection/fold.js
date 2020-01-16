const fold = (func, list, acc) => {
  const objectValues = Object.values(list)
  let result = acc

  for (let idx = 0; idx < objectValues.length; idx += 1) {
    result = func(result, objectValues[idx])
  }

  return result
}

module.exports = fold
