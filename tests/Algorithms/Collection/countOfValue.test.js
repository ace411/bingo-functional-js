const { describe } = require('riteway')
const { countOfValue } = require('../../../index')

describe('countOfValue()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return zero',
    actual: countOfValue(),
    expected: 0,
  })

  assert({
    given: 'a multi-dimensional array and a value defined inside of it',
    should: 'return a number that represents the frequency of the value',
    actual: countOfValue(['foo', 'bar', ['baz', 'foo']], 'foo'),
    expected: 2,
  })

  assert({
    given: 'a multi-dimensional object and a value defined inside of it',
    should: 'return a number that represents the frequency of the value',
    actual: countOfValue({ foo: 'foo', fizz: { bar: 12, buzz: 'foo' } }, 'foo'),
    expected: 2,
  })

  assert({
    given: 'a multi-dimensional array and non-existent value',
    should: 'return zero',
    actual: countOfValue(['foo', 'bar', ['baz']], '3'),
    expected: 0,
  })

  assert({
    given: 'a multi-dimensional object and non-existent value',
    should: 'return zero',
    actual: countOfValue(
      { foo: 'foo', bar: { fizz: 'fizz', buzz: 'buzz' } },
      'baz',
    ),
    expected: 0,
  })
})
