const { curry } = require('../../Algorithms/Function')
const { fold } = require('../../Algorithms/Collection')

/**
 * bind function
 * function name for >>=; sequentially composes two actions
 *
 * bind :: Monad m => m a -> (a -> m b) -> m b
 * @param  {...any} args
 * @returns {Monadic}
 * @example
 *
 * bind((x) => State.of(x.toUpperCase()), State.of('foo'))
 * // => [Monadic]
 */
const bind = (...args) => curry((fn, val) => val.bind(fn))(...args)

/**
 * mcompose function
 * compose two monadic values from right to left
 *
 * mcompose :: m a -> n s -> n a
 * @param {function} fnx
 * @param {function} fny
 * @returns {Monadic}
 * @example
 *
 * mcompose(
 *  (txt) => IO(txt.toUpperCase()),
 *  (path) => IO(() => fs.readFileSync(path, { encoding: 'utf-8' }))
 * )
 * // => [Monadic]
 */
const mcompose = (fnx, fny) => fold(
  ((acc, mnd) => (val) => bind(acc, bind(mnd, val))),
  [fny],
  fnx,
)

module.exports = { mcompose, bind }
