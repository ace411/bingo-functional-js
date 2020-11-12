const { describe } = require('riteway')
const { pluckPath } = require('../../../index')

describe('pluckPath()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return undefined',
    actual: pluckPath(),
    expected: undefined,
  })

  assert({
    given: 'a valid path array and an object',
    should: 'return the value associated with the index at the end of the path',
    actual: pluckPath(['x', 'foo', '1'], {
      y: 'foo',
      x: {
        foo: [12, 30],
      },
    }),
    expected: 30,
  })

  assert({
    given: 'an invalid path array, an object, and a unit type',
    should: 'return the unit value',
    actual: pluckPath(
      ['x', 'bar'],
      {
        y: 'foo',
        x: { foo: 'bar' },
      },
      null,
    ),
    expected: null,
  })

  assert({
    given: 'a valid path array and an array',
    should: 'return the value associated with the index at the end of the path',
    actual: pluckPath(['0', 'foo'], [{ foo: 'bar', bar: 'baz' }]),
    expected: 'bar',
  })

  assert({
    given: 'an invalid path array, an array, and a unit type',
    should: 'return the unit value',
    actual: pluckPath(['0', 'bar'], [{ foo: 12 }, 3], null),
    expected: null,
  })
})
