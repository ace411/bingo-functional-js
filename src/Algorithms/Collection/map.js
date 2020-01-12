const map = (func, list) => {
  const res = Array.isArray(list) ? [] : {}
  for (const property in list) {
    res[property] = func(list[property])
  }

  return res
}

module.exports = map
