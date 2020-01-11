const maybeFn = require('./functions')
const { Maybe, Just, Nothing } = require('./maybe')

module.exports = { ...maybeFn, Maybe, Just, Nothing }