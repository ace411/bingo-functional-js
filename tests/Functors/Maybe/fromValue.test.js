const { describe } = require('riteway')
const {
  isJust,
  partial,
  compose,
  fromJust,
  fromValue,
  fromMaybe,
  isNothing,
  toException,
} = require('../../../index')

describe('fromValue()', async (assert) => {
  const checkType = (just) => compose(
    fromValue,
    (obj) => (just ? isJust(obj) : isNothing(obj)),
  )

  assert({
    given: 'an arbitrary value',
    should: 'return a Just object',
    actual: checkType(true)(2),
    expected: true,
  })

  assert({
    given: 'null',
    should: 'return a Nothing instance',
    actual: checkType(false)(null),
    expected: true,
  })
})

describe('fromJust()', async (assert) => {
  const result = compose(fromValue, fromJust)

  assert({
    given: 'Just instance',
    should: 'return value encapsulated in Monad',
    actual: result('foo'),
    expected: 'foo',
  })

  assert({
    given: 'Nothing instance',
    should: 'throw a Maybe Exception',
    actual: toException(result)(null),
    expected: 'Maybe.fromJust: Nothing',
  })
})

describe('fromMaybe()', async (assert) => {
  const result = compose(fromValue, partial(fromMaybe, 'error'))

  assert({
    given: 'Just instance',
    should: 'return value encapsulated in Monad',
    actual: result('foo'),
    expected: 'foo',
  })

  assert({
    given: 'Nothing instance',
    should: 'return default value',
    actual: result(null),
    expected: 'error',
  })
})
