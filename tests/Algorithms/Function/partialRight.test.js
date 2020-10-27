const { describe, Try } = require('riteway')
const { partialRight, isFunction } = require('../../../index')

describe('partialRight()', async (assert) => {
  const quadratic = (a, b, c) => {
    const numerator = (b ** 2 - 4 * a * c) ** 0.5
    const denominator = 2 * a

    return {
      first: -b + numerator / denominator,
      second: -b - numerator / denominator,
    }
  }

  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: Try(partialRight).toString(),
    expected: "TypeError: Cannot read property 'length' of undefined",
  })

  assert({
    given: 'a quadratic function with three arguments',
    should: 'return functions of variable arity',
    actual: [
      isFunction(partialRight(quadratic, 4, 1)),
      isFunction(partialRight(quadratic, 4)),
    ],
    expected: [true, true],
  })
})
