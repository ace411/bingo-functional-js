const Monadic = require('./monad')
const IO = require('./IO')
const Reader = require('./Reader')
const State = require('./State')
const Writer = require('./Writer')

module.exports = {
    Monadic,
    ...IO,
    ...Reader,
    ...State,
    ...Writer
}
