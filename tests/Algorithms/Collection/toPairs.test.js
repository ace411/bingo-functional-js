const { describe, Try } = require('riteway')
const { toPairs } = require('../../../index')

describe('toPairs()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(toPairs).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an object',
    should: 'return an array containing array pairs',
    actual: toPairs({ foo: 'fooz', bar: 'baz' }),
    expected: [['foo', 'fooz'], ['bar', 'baz']],
  })
})
