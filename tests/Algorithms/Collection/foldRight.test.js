const { describe, Try } = require('riteway')
const { foldRight, concat } = require('../../../index')

describe('foldRight()', async (assert) => {
  const accFn = (acc, val) => {
    let result = acc

    result += concat('.', val, '')
    return result
  }

  assert({
    given: 'accumulator and no list item',
    should: 'return the accumulator value',
    actual: foldRight(accFn, [], ''),
    expected: '',
  })

  assert({
    given: 'no arguments',
    should: 'throw an error',
    actual: Try(foldRight).toString(),
    expected: 'TypeError: Cannot convert undefined or null to object',
  })

  assert({
    given: 'a function, object, and accumulator value',
    should: 'return a single value that builds on the accumulator',
    actual: foldRight(accFn, { foo: 'foo', bar: 'bar' }, ''),
    expected: 'bar.foo.',
  })

  assert({
    given: 'a function, array, and accumulator value',
    should: 'return a single value that builds on the accumulator',
    actual: foldRight(accFn, ['foo', 'bar'], ''),
    expected: 'bar.foo.',
  })
})
