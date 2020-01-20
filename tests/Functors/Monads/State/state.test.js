const { describe } = require('riteway')
const equal = require('deep-equal')
const { State } = require('../../../../index')
const laws = require('../../laws')

describe('State', async (assert) => {
  const upper = (str) => str.toUpperCase()
  const lcfirst = (str) => `${str.charAt(0).toLowerCase()}${str.substr(1)}`

  const identity = laws.identity(State.of('foo'))

  assert({
    given: 'a State monad instance',
    should: 'return true in conformance to the identity law',
    actual: equal(identity.left.run('bar'), identity.right.run('bar')),
    expected: true,
  })

  const composition = laws.composition(State.of('foo'), upper, lcfirst)

  assert({
    given: 'a State monad instance and functions',
    should: 'return true in conformance to the composition law',
    actual: equal(composition.left.run('bar'), composition.right.run('bar')),
    expected: true,
  })

  const left = laws.leftIdentity(
    State.of('foo'),
    (str) => State.of(upper(str)),
    'foo',
  )

  assert({
    given: 'a State instance, function, and arbitrary value',
    should: 'return true in conformance to the left identity law',
    actual: equal(left.left.run('bar'), left.right.run('bar')),
    expected: true,
  })

  const assoc = laws.associativity(
    State.of('foo'),
    (val) => State.of(upper(val)),
    (val) => State.of(lcfirst(val)),
  )

  assert({
    given: 'a State instance and two functions',
    should: 'return true in conformance to the associativity law',
    actual: equal(assoc.left.run('foo'), assoc.right.run('foo')),
    expected: true,
  })

  const right = laws.rightIdentity(
    State.of('foo'),
    (new State((val) => ['foo', val])),
  )

  assert({
    given: 'two subtly different State instances',
    should: 'return true in conformance to the right identity law',
    actual: equal(right.left.run('bar'), right.right.run('bar')),
    expected: true,
  })
})
