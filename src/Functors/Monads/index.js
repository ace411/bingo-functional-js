const Monadic = require('./monad')
const IO = require('./IO')
const Reader = require('./Reader')

module.exports = { Monadic, ...IO, ...Reader }