const sizeOf = require('./sizeOf')

const keyExists = (haystack, needle) => {
  const result = []

  for (const [key, value] of Object.entries(haystack)) {
    if (needle === key) {
      result.push(value)
    }
  }

  return sizeOf(result) !== 0
}

module.exports = keyExists
