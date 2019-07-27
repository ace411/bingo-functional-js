const _ = require('./index')

let x = _.state(x => x + 2).ap(_.State.of(3))

console.log(x.run(2))