/**
 * isSymbol function
 * isSymbol :: a -> bool
 * @param {*} val 
 * @returns {boolean}
 * @example
 * 
 * isSymbol(Symbol('foo'))
 * // => true
 */

const isSymbol = (val) => typeof val === 'symbol'

module.exports = isSymbol
