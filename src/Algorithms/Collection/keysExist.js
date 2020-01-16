const sizeOf = require('./sizeOf')
const filter = require('./filter')
const keyExists = require('./keyExists')

const keysExist = (haystack, needles) => {
  const keySize = sizeOf(needles)
  const matches = filter(
    (key) => keyExists(haystack, key),
    needles,
  )

  return sizeOf(matches) === keySize
}

module.exports = keysExist
