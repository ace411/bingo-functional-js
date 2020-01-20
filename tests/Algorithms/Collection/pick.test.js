const { describe, Try } = require('riteway')
const { pick } = require('../../../index')

describe('pick()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(pick).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'an empty array and potential array item',
    should: 'return undefined',
    actual: pick([], 'foo'),
    expected: undefined,
  })

  assert({
    given: 'an empty object and potential object value',
    should: 'return undefined',
    actual: pick({}, 'foo'),
    expected: undefined,
  })

  assert({
    given: 'an object with items and non-existent object value',
    should: 'return undefined',
    actual: pick({ a: 'foo', b: 'bar' }, 'baz'),
    expected: undefined,
  })

  assert({
    given: 'an array with items and non-existent array item',
    should: 'return undefined',
    actual: pick(['foo', 'bar', 'baz'], 1),
    expected: undefined,
  })

  assert({
    given: 'an array with items and existent array item',
    should: 'return specified item',
    actual: pick(['foo', 'bar', 'baz'], 'bar'),
    expected: 'bar',
  })

  assert({
    given: 'an object with items and existent object value',
    should: 'return specified value',
    actual: pick({ a: 'foo', b: 'bar' }, 'bar'),
    expected: 'bar',
  })
})
