const filter = require('./filter')
const head = require('./head')
const isJsonObject = require('../Function/isJsonObject')

const filterDeep = (func, list) => {
  const result = Array.isArray(list) ? [] : {}

  for (const [key, value] of Object.entries(list)) {
    result[key] = Array.isArray(value) || isJsonObject(value)
      ? filterDeep(func, value)
      : head(filter(func, [value]))
  }

  return result
}

module.exports = filterDeep
