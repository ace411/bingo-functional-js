const _ = require('./index')

const comp = _.mcompose(x => _.fromValue(x + 2), _.fromValue)

console.log(comp(_.fromValue(3)).getJust())
