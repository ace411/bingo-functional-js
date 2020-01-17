const sizeOf = require('../Collection/sizeOf')

const concat = (wildcard, ...strings) => (!(sizeOf(strings) === 0)
  ? strings.join(wildcard)
  : undefined)

module.exports = concat
