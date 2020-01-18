/**
 * isUndefined function
 * isUndefined :: a -> Bool
 * @param {*} val 
 * @returns {boolean}
 * @example
 * 
 * isUndefined(undefined)
 * // => true
 */

const isUndefined = (val) => typeof val === 'undefined'

module.exports = isUndefined
