const { curry } = require('../../Algorithms/Function')
const { fold } = require('../../Algorithms/Collection')

function bind(func, monad) {
  return curry((fn, val) => val.bind(fn))(...arguments)
}

const mcompose = (fnx, fny) => fold(
  ((acc, mnd) => (val) => bind(acc, bind(mnd, val))),
  [fny],
  fnx,
)

module.exports = { mcompose, bind }
