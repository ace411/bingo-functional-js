const { describe } = require('riteway')
const { assoc } = require('../../../index')

describe('assoc()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: assoc(),
    expected: undefined,
  })

  assert({
    given: 'an index, arbitrary value, and array',
    should: 'create a shallow clone of the array with a value update',
    actual: assoc('1', 'foo', [2, 3, 9]),
    expected: [2, 'foo', 9],
  })

  assert({
    given: 'a key, arbitrary value, and object',
    should: 'create a shallow clone of the object with a value update',
    actual: assoc('foo', 23, { bar: 'bar', foo: 'foo' }),
    expected: { bar: 'bar', foo: 23 },
  })

  assert({
    given: 'a non-existent key, arbitrary value, and object',
    should: 'return a clone of the object with a new key-value pair',
    actual: assoc('foo', 23, { x: 'foo', y: 'bar' }),
    expected: { x: 'foo', y: 'bar', foo: 23 },
  })
})
