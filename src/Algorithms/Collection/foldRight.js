const fold = require('./fold')
const reverse = require('./reverse')

const foldRight = (func, list, acc) => fold(func, reverse(list), acc)

module.exports = foldRight
