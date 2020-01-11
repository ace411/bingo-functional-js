const Monadic = require('./monad')
const monadHelpers = require('./functions')
const IO = require('./IO')
const Reader = require('./Reader')
const State = require('./State')
const Writer = require('./Writer')

module.exports = {
    Monadic,
    ...IO,
    ...Reader,
    ...State,
    ...Writer,
    ...monadHelpers
}
