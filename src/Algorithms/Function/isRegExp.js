const isRegExp = (val) => val instanceof Object && val.constructor === RegExp

module.exports = isRegExp