const sizeOf = require('./sizeOf')
const fold = require('./fold')

const mean = (list) => {
  const sum = fold((acc, val) => {
    let result = acc
    result += val

    return result
  }, list, 0)

  return sum / sizeOf(list)
}

module.exports = mean
