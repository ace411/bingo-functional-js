const dropLeft = require('./dropLeft')

const extend = (...lists) => lists[0].concat(...dropLeft(lists, 1))

module.exports = extend