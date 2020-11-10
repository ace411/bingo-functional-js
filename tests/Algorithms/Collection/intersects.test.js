const { describe, Try } = require('riteway')
const { intersects } = require('../../../index')

describe('intersects()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throws an error',
    actual: Try(intersects).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'two arrays with similar elements',
    should: 'return true',
    actual: intersects(['foo', 'bar', 'baz'], ['baz', 'foo', 'foom', 'bloom']),
    expected: true,
  })

  assert({
    given: 'two objects with similar elements',
    should: 'return true',
    actual: intersects({ foo: 'foo' }, { fim: 'foo', fizz: 'buzz' }),
    expected: true,
  })

  assert({
    given: 'two unique arrays',
    should: 'return false',
    actual: intersects(['foo', 'bar'], ['fizz', 'buzz']),
    expected: false,
  })

  assert({
    given: 'two unique objects',
    should: 'return false',
    actual: intersects({ foo: 'foo', bar: 'bar' }, { fizz: 'buzz' }),
    expected: false,
  })
})
