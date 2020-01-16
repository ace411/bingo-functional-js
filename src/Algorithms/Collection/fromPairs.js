const fold = require('./fold')
const sizeOf = require('./sizeOf')

const fromPairs = (list) => {
  const ret = fold((obj, item) => {
    const [key, val] = Array.isArray(item) && sizeOf(item) === 2 && item
    const result = obj

    if (!key || !val) {
      return result
    }

    result[key] = val
    return result
  }, list, {})

  return ret
}

module.exports = fromPairs
