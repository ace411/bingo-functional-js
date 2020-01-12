const head = require('./head')
const { isNumeric } = require('../Function')

const indexOf = (haystack, needle) => {
  const index = []

  for (const property in haystack) {
    const val = haystack[property]

    if (val === needle) {
      index.push(
        isNumeric(property)
          ? Number.parseInt(property)
          : property,
      )
    }
  }

  return head(index)
}

module.exports = indexOf
