const isJsonObject = (val) => val instanceof Object && val.constructor === Object

module.exports = isJsonObject