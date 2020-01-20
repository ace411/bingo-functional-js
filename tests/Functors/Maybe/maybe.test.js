const { describe } = require('riteway')
const equal = require('deep-equal')
const laws = require('../laws')
const { Maybe } = require('../../../index')

describe('Maybe', async (assert) => {
  const square = (val) => val ** 2
  const cube = (val) => val ** 3

  const id = laws.identity(Maybe.fromValue(2))

  assert({
    given: 'an arbitrary value',
    should: 'return true in conformance to the identity law',
    actual: equal(id.left.getJust(), id.right.getJust()),
    expected: true,
  })

  const composition = laws.composition(Maybe.fromValue(null), square, cube)

  assert({
    given: 'an arbitrary functor and functions',
    should: 'return true in conformance to the composition law',
    actual: equal(composition.left.getNothing(), composition.right.getNothing()),
    expected: true,
  })

  const left = laws.leftIdentity(
    Maybe.fromValue(2),
    (val) => Maybe.fromValue(square(val)),
    2,
  )
  assert({
    given: 'an arbitrary value and function',
    should: 'return true in conformance to the left identity law',
    actual: equal(left.left.getJust(), left.right.getJust()),
    expected: true,
  })

  const assoc = laws.associativity(
    Maybe.fromValue(2),
    (val) => Maybe.fromValue(square(val)),
    (val) => Maybe.fromValue(cube(val)),
  )

  assert({
    given: 'a Maybe monad instance and arbitrary functions',
    should: 'return true in conformance to the associativity law',
    actual: equal(assoc.left.getJust(), assoc.right.getJust()),
    expected: true,
  })

  const right = laws.rightIdentity(
    Maybe.fromValue('foo'),
    (new Maybe(undefined)).constructor.just('foo'),
  )

  assert({
    given: 'two Maybe instances',
    should: 'return true in conformance to the right identity law',
    actual: equal(right.left.getJust(), right.right.getJust()),
    expected: true,
  })
})
