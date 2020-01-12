const sizeOf = require('./sizeOf')

const filter = (func, list) => {
  if (Array.isArray(list)) {
    const res = []
    for (let x = 0; x < sizeOf(list); x++) {
      if (func(list[x])) res.push(list[x])
    }
    return res
  }

  const res = {}
  for (const property in list) {
    const val = list[property]
    if (func(val)) {
      res[property] = val
    }
  }

  return res
}

module.exports = filter
