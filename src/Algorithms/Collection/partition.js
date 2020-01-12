const sizeOf = require('./sizeOf')
const extend = require('./extend')

const partition = (num, list) => {
  const count = sizeOf(list)

  if (num < 2 || count < 2) {
    return [list]
  }

  const partitionSize = Math.ceil(count / num)

  return extend(
    [list.slice(0, partitionSize)],
    partition(num - 1, list.slice(partitionSize)),
  )
}

module.exports = partition
