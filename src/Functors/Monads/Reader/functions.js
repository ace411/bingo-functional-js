const Reader = require('./reader')

/**
 * reader function
 * inserts a selector function into a Reader environment
 *
 * reader :: (r -> a) -> m a
 * @param {function} selector
 * @returns {Reader}
 * @example
 *
 * reader((name) => `Hello ${name}`)
 * // => [Reader]
 */
const reader = (selector) => Reader.of(selector)

/**
 * runReader function
 * runs a Reader and extracts the final value from it
 *
 * runReader :: Reader r a -> r -> a
 * @param {Reader} instance
 * @param {*} val
 * @returns {*}
 * @example
 *
 * runReader(reader((name) => `Hello ${name}`), 'World')
 * // => 'Hello World'
 */
const runReader = (instance, val) => instance.run(val)

/**
 * mapReader function
 * applies a function to the value in the Reader monad
 *
 * mapReader :: (a -> b) -> Reader r a -> a -> Reader r b
 * @param {function} func
 * @param {Reader} instance
 * @returns {Reader}
 * @example
 *
 * mapReader((val) => val ** 2, reader(identity))
 * // => [Reader]
 */
const mapReader = (func, instance) => instance.map(func)

/**
 * ask function
 * retrieves the Reader monad environment
 *
 * ask :: m r
 * @returns {Reader}
 * @example
 *
 * ask()
 * // => [Reader]
 */
const ask = () => Reader.of((x) => x)

module.exports = {
  reader, runReader, mapReader, ask,
}
