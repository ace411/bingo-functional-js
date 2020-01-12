const sizeOf = require('./sizeOf')
const partition = require('./partition')

const partitionBy = (partitionSize, list) => {
  if (partitionSize === 0) {
    return list
  }

  const count = Math.ceil(sizeOf(list) / partitionSize)

  return partition(count, list)
}

module.exports = partitionBy
