const head = require('./head')
const isNumeric = require('../Function/isNumeric')

const indexOf = (haystack, needle) => {
  const index = []

  for (const [key, value] of Object.entries(haystack)) {
    if (value === needle) {
      index.push(isNumeric(key) ? Number.parseInt(key, 10) : key)
    }
  }

  return head(index)
}

module.exports = indexOf
