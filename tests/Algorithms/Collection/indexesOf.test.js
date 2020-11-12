const { describe } = require('riteway')
const { indexesOf } = require('../../../index')

describe('indexesOf()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return an empty list',
    actual: indexesOf(),
    expected: [],
  })

  assert({
    given: 'a multi-dimensional object and a value defined inside of it',
    should:
      'return an array containing all the keys with which the value is associated',
    actual: indexesOf(
      {
        foo: 'foo',
        bar: [{ baz: 'foo' }, 12, 'foo'],
      },
      'foo',
    ),
    expected: ['foo', 'baz', '2'],
  })

  assert({
    given: 'a multi-dimensional array and a value defined inside of it',
    should:
      'return an array containing all the keys with which the value is associated',
    actual: indexesOf([12, 'foo', { bar: 'foo' }], 'foo'),
    expected: ['1', 'bar'],
  })

  assert({
    given: 'a multi-dimensional object and a non-existent object value',
    should: 'return an empty array',
    actual: indexesOf({ foo: 'foo', bar: { x: 12, y: 'baz' } }, 'foo-bar'),
    expected: [],
  })

  assert({
    given: 'a multi-dimensional array and a non-existent array value',
    should: 'return an empty array',
    actual: indexesOf([12, ['foo', { x: 'bar' }]], 'foo-bar'),
    expected: [],
  })
})
