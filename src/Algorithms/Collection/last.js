const sizeOf = require('./sizeOf')
const { partialRight } = require('../Function')

const lastVal = (list, size) => list[size - 1]

const last = (list) => {
  const listSize = sizeOf(list)
  const result = partialRight(lastVal, listSize)

  return Array.isArray(list)
    ? result(list)
    : result(Object.values(list))
}

module.exports = last
