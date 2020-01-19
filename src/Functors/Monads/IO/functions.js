const { IO: _IO } = require('./io')
const { toException, compose, isFunction } = require('../../../Algorithms/Function')

/**
 * IO function
 * initialize a value of type IO
 *
 * IO :: (a -> b) -> IO ()
 * @param {function} operation
 * @returns {IO}
 * @example
 *
 * IO(() => fs.readFileSync('data.txt', { encoding: 'utf-8' }))
 * // => [IO]
 */
const IO = (operation) => _IO.of(operation)

function _IOException(message) {
  this.message = message
  this.name = 'IOException'
}

/**
 * IOException function
 * throws an IO exception
 * IOException :: String -> IO ()
 * @param {string} msg
 * @returns {IO}
 * @example
 *
 * IOException('fail')
 * // => [IO]
 */
const IOException = (msg) => IO(() => () => {
  throw new _IOException(msg)
})

/**
 * catchIO function
 * catches an IO exception
 * catchIO :: IO a -> (IOException -> IO a) -> IO a
 * @param {object} io
 * @returns {IO}
 * @example
 *
 * catchIO(IOException('fail'))
 * // => [IO]
 */
const catchIO = (io) => io.bind((operation) => {
  const ret = compose(toException, IO)

  return isFunction(operation)
    ? ret(operation)
    : ret(() => operation)
})

module.exports = { IO, IOException, catchIO }
