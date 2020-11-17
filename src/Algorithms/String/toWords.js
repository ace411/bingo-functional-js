const isString = require('../Function/isString')

const toWords = (text, regex) => (isString(text) ? text.split(regex) : [])

module.exports = toWords
