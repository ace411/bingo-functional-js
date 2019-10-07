const collection = require('./src/Algorithms/Collection')
const func = require('./src/Algorithms/Function')
const string = require('./src/Algorithms/String')

module.exports = { ...collection, ...func, ...string }