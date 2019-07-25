const collection = require('./src/Algorithms/Collection')
const func = require('./src/Algorithms/Function')
const string = require('./src/Algorithms/String')
const maybe = require('./src/Functors/Maybe')

module.exports = { 
    ...collection, 
    ...func, 
    ...string, 
    ...maybe 
}