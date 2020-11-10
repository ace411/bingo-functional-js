const fold = require('./fold')
const sizeOf = require('./sizeOf')
const pick = require('./pick')

/**
 * intersects
 *
 * intersects :: [a] -> [b] -> Bool
 * @param {(object|array)} fst
 * @param {(object|array)} snd
 * @returns {boolean}
 * @example
 *
 * intersects(['foo', 'bar], ['baz', 'bar'])
 * // => true
 */
const intersects = (fst, snd) => {
  const comp = sizeOf(fst) > sizeOf(snd) // || sizeOf(fst) === sizeOf(snd)
  const intersect = []
  const foldf = (list) => (acc, val) => {
    if (pick(list, val, null) !== null) {
      acc.push(val)
    }
    return acc
  }

  if (comp) {
    intersect.push(...fold(foldf(snd), fst, []))
  }

  intersect.push(...fold(foldf(fst), snd, []))

  return sizeOf(intersect) > 0
}

module.exports = intersects
