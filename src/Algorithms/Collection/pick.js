const head = require('./head')
const filter = require('./filter')
const flatten = require('./flatten')
const { isJsonObject } = require('../Function')

const pick = (haystack, needle) => {
  const picked = []
  const objectValues = Object.values(haystack)

  for (let idx = 0; idx < objectValues.length; idx += 1) {
    const value = objectValues[idx]

    picked.push(isJsonObject(value) || Array.isArray(value)
      ? pick(value, needle)
      : (value === needle && value))
  }

  return head(filter((val) => val !== false, flatten(picked)))
}

module.exports = pick
