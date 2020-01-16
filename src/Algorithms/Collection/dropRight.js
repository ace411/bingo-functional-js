const dropLeft = require('./dropLeft')
const reverse = require('./reverse')

const dropRight = (list, count = 1) => reverse(dropLeft(reverse(list), count))

module.exports = dropRight
