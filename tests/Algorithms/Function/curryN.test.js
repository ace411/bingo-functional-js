const { describe } = require('riteway')
const { curryN, isFunction } = require('../../../index')

describe('curryN()', async (assert) => {
  const quadratic = curryN(2, (a, b, c = 4) => {
    const numerator = (b ** 2 - 4 * a * c) ** 0.5
    const denominator = 2 * a

    return {
      first: -b + numerator / denominator,
      second: -b - numerator / denominator,
    }
  })

  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(curryN()),
    expected: true,
  })

  const quad = quadratic(1)

  assert({
    given:
      'an argument count and quadratic function with two mandatory parameters',
    should: 'return functions of single arity',
    actual: isFunction(quad),
    expected: true,
  })
})
