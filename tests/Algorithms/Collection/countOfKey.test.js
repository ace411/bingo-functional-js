const { describe } = require('riteway')
const { countOfKey } = require('../../../index')

describe('countOfKey()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return zero',
    actual: countOfKey(),
    expected: 0,
  })

  assert({
    given: 'a multi-dimensional array and a key defined inside of it',
    should: 'return a number that represents the frequency of the key',
    actual: countOfKey(['foo', 'bar', ['baz']], '0'),
    expected: 2,
  })

  assert({
    given: 'a multi-dimensional object and a key defined inside of it',
    should: 'return a number that represents the frequency of the key',
    actual: countOfKey({ foo: 'foo', fizz: { bar: 12, foo: 'bar' } }, 'foo'),
    expected: 2,
  })

  assert({
    given: 'a multi-dimensional array and non-existent key',
    should: 'return zero',
    actual: countOfKey(['foo', 'bar', ['baz']], '3'),
    expected: 0,
  })

  assert({
    given: 'a multi-dimensional object and non-existent key',
    should: 'return zero',
    actual: countOfKey(
      { foo: 'foo', bar: { fizz: 'fizz', buzz: 'buzz' } },
      'baz',
    ),
    expected: 0,
  })
})
