const dropLeft = require('./dropLeft')
const reverse = require('./reverse')

const revOpt = (list) => (Array.isArray(list)
  ? list.reverse()
  : reverse(list))

const dropRight = (list, count = 1) => revOpt(dropLeft(revOpt(list), count))

module.exports = dropRight
