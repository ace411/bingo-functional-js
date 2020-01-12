const sizeOf = require('./sizeOf')
const fold = require('./fold')

const mean = (list) => {
  const sum = fold((acc, val) => {
    acc += val
    return acc
  }, list, 0)

  return sum / sizeOf(list)
}

module.exports = mean
