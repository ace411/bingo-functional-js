const { describe, Try } = require('riteway')
const { assocPath } = require('../../../index')

describe('assocPath()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(assocPath).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a valid path, an arbitrary value, and an object',
    should:
      'create a shallow clone of the object with an overwritten value at the end of the path',
    actual: assocPath(['x', '1'], 'bar', { x: [3, { foo: 'foo' }] }),
    expected: { x: [3, 'bar'] },
  })

  assert({
    given: 'a valid path, an arbitrary value, and a multi-dimensional array',
    should:
      'create a shallow clone of the array with an overwritten value at the end of the path',
    actual: assocPath(['1', '3'], { foo: 'foo' }, [3, [9, 7, 'baz', 'bar']]),
    expected: [3, [9, 7, 'baz', { foo: 'foo' }]],
  })
})
