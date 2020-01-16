const { describe, Try } = require('riteway')
const { keysExist } = require('../../../index')

describe('keysExist()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(keysExist).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'two arrays; the latter with non-existent array indexes',
    should: 'return false',
    actual: keysExist(['foo', 'bar'], ['7', '8']),
    expected: false,
  })

  assert({
    given: 'an object and array with non-existent object keys',
    should: 'return false',
    actual: keysExist({ foo: 'foo', bar: 2 }, ['baz', 'cat']),
    expected: false,
  })

  assert({
    given: 'two arrays; the latter with existent array indexes',
    should: 'return true',
    actual: keysExist(['foo', 'bar', 'baz', 'fooz'], ['1', '3']),
    expected: true,
  })

  assert({
    given: 'an object and array with existent object keys',
    should: 'return true',
    actual: keysExist({ foo: 'foo', bar: 'bar', baz: 'bar' }, ['foo', 'baz']),
    expected: true,
  })
})
