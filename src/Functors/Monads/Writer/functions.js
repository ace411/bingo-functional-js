const Writer = require('./writer')
const { isEmpty, isUndefined } = require('../../../Algorithms/Function')

/**
 * tell function
 * produces the Writer monad's output
 *
 * tell :: w -> m ()
 * @param {*} msg
 * @returns {Writer}
 * @example
 *
 * tell('put 2')
 * // => [Writer]
 */
const tell = (msg) => new Writer(() => [null, isUndefined(msg) || isEmpty(msg) ? [] : [msg]])

/**
 * writer function
 * creates a new instance of the Writer monad
 *
 * writer :: a -> w -> Writer (a, w)
 * @param {*} result
 * @param {*} output
 * @returns {Writer}
 * @example
 *
 * writer(2, 'put 2')
 * // => [Writer]
 */
const writer = (result, output) => Writer.of(result, output)

/**
 * runWriter function
 * unwrap a Writer computation as a (result, output) pair
 *
 * runWriter :: Writer a w -> (a, w)
 * @param {Writer} instance
 * @returns {array}
 * @example
 *
 * runWriter(writer(2, 'put 2'))
 * // => [2, ['put 2']]
 */
const runWriter = (instance) => instance.run()

/**
 * execWriter function
 * extract the output from the writer computation
 *
 * execWriter :: Writer a w -> w
 * @param {Writer} instance
 * @returns {*}
 * @example
 *
 * execWriter(writer(2, 'put 2'))
 * // => ['put 2']
 */
const execWriter = (instance) => {
  const [, output] = runWriter(instance)

  return output
}

module.exports = {
  tell,
  writer,
  runWriter,
  execWriter,
}
