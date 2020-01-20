const { describe, Try } = require('riteway')
const { curry, isFunction } = require('../../../index')

describe('curry()', async (assert) => {
  const quadratic = curry((a, b, c) => {
    const numerator = ((b ** 2) - (4 * a * c)) ** 0.5
    const denominator = (2 * a)

    return {
      first: -b + (numerator / denominator),
      second: -b - (numerator / denominator),
    }
  })

  assert({
    given: 'no arguments',
    should: 'throw error',
    actual: Try(curry).toString(),
    expected: 'TypeError: Cannot read property \'length\' of undefined',
  })

  const quad = quadratic(1)

  assert({
    given: 'a quadratic function with three arguments',
    should: 'return functions of single arity',
    actual: [isFunction(quad), isFunction(quad(4))],
    expected: [true, true],
  })
})
