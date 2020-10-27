const { describe, Try } = require('riteway')
const { partial, isFunction } = require('../../../index')

describe('partial()', async (assert) => {
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
    actual: Try(partial).toString(),
    expected: "TypeError: Cannot read property 'length' of undefined",
  })

  assert({
    given: 'a quadratic function with three arguments',
    should: 'return functions of variable arity',
    actual: [
      isFunction(partial(quadratic, 1, 4)),
      isFunction(partial(quadratic, 1)),
    ],
    expected: [true, true],
  })
})
