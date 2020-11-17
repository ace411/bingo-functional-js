const monadHelpers = require('./functions')
const IO = require('./IO')
const Reader = require('./Reader')
const State = require('./State')
const Writer = require('./Writer')

module.exports = {
  ...IO,
  ...Reader,
  ...State,
  ...Writer,
  ...monadHelpers,
}
