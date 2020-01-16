const map = (func, list) => {
  const res = Array.isArray(list) ? [] : {}

  for (const [key, value] of Object.entries(list)) {
    res[key] = func(value)
  }

  return res
}

module.exports = map
