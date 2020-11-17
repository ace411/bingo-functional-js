const { curry } = require('../../Algorithms/Function')
const { fold } = require('../../Algorithms/Collection')
const head = require('../../Algorithms/Collection/head')
const sizeOf = require('../../Algorithms/Collection/sizeOf')
const tail = require('../../Algorithms/Collection/tail')

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
const mcompose = (fnx, fny) =>
  fold((acc, mnd) => (val) => bind(acc, bind(mnd, val)), [fny], fnx)

/**
 * foldM
 * analogous to fold except its result is encapsulated in a monad
 *
 * foldM :: (a -> b -> m a) -> [b] -> c -> m b
 * @param {function} fn
 * @param {array} list
 * @param {*} acc
 * @returns {object}
 * @example
 *
 * foldM((acc, val) => f.IO(`${acc}_${val}`), { foo: 'foo', bar: 'bar' }, '')
 * // => IO { unsafe: [Function], of: [Function], exec.... }
 */
const foldM = (fn, list, acc) => {
  let monad = fn(acc, head(list))

  const fold = (next, entries) => {
    if (sizeOf(entries) === 0) {
      return monad.of(next)
    }
    let fst = head(entries)
    let other = tail(entries)

    return fn(next, fst).bind((result) => {
      let final = fold(result, other)

      return final
    })
  }

  return fold(acc, list)
}

/**
 * mapM
 * analogous to map except its result is encapsulated in a monad
 *
 * mapM :: (a -> m b) -> [a] -> m [b]
 * @param {function} fn
 * @param {array} list
 * @returns {object}
 * @example
 *
 * mapM((x) => Just.of(x ** 2), [3, 6, 7])
 * // => Just { val: [9, 36, 49], of: [Function], ap; [Function], bind:... }
 */
const mapM = (fn, list) => {
  let monad = fn(head(list))

  const map = (entries) => {
    if (sizeOf(entries) === 0) {
      return monad.of([])
    }

    let fst = head(entries)
    let other = tail(entries)

    return fn(fst).bind((res) =>
      map(other).bind((ret) => {
        ret.unshift(res)

        return monad.of(ret)
      }),
    )
  }

  return map(list)
}

/**
 * filterM
 * analogous to filter except its result is encapsulated in a monad
 *
 * filterM :: (a -> m Bool) -> [a] -> m [a]
 * @param {function} fn
 * @param {array} list
 * @returns {object}
 * @example
 *
 * filterM((x) => Just.of(x % 2 === 0), [5, 7, 8])
 * // => Just { val: [8], of: [Function], ap; [Function], bind:... }
 */
const filterM = (fn, list) => {
  let monad = fn(head(list))

  const filter = (entries) => {
    if (sizeOf(entries) === 0) {
      return monad.of([])
    }

    let fst = head(entries)
    let other = tail(entries)

    return fn(fst).bind((res) =>
      filter(other).bind((ret) => {
        if (res) {
          ret.unshift(fst)
        }

        return monad.of(ret)
      }),
    )
  }

  return filter(list)
}

module.exports = {
  mcompose,
  filterM,
  foldM,
  bind,
  mapM,
}
