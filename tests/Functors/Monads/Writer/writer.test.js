const { describe } = require('riteway')
const equal = require('deep-equal')
const { Writer } = require('../../../../index')
const laws = require('../../laws')

describe('Writer', async (assert) => {
  const upper = (str) => str.toUpperCase()
  const lcfirst = (str) => `${str.charAt(0).toLowerCase()}${str.substr(1)}`

  const identity = laws.identity(Writer.of('foo', 'put str'))

  assert({
    given: 'a Writer monad instance',
    should: 'return true in conformance to the identity law',
    actual: equal(identity.left.run(), identity.right.run()),
    expected: true,
  })

  const composition = laws.composition(Writer.of('foo', 'put str'), upper, lcfirst)

  assert({
    given: 'a Writer monad instance and functions',
    should: 'return true in conformance to the composition law',
    actual: equal(composition.left.run(), composition.right.run()),
    expected: true,
  })

  const left = laws.leftIdentity(
    Writer.of('foo'),
    (str) => Writer.of(upper(str), 'to uppercase'),
    'foo',
  )

  assert({
    given: 'a Writer monad, function, and arbitrary value',
    should: 'return true in conformance to te left identity law',
    actual: equal(left.left.run(), left.right.run()),
    expected: true,
  })

  const right = laws.rightIdentity(
    Writer.of('foo', 'put str'),
    new Writer(() => ['foo', ['put str']]),
  )

  assert({
    given: 'two subtly different Writer instances',
    should: 'return true in conformance to the right identity law',
    actual: equal(right.left.run(), right.right.run()),
    expected: true,
  })

  const assoc = laws.associativity(
    Writer.of('foo bar', 'put str'),
    (str) => Writer.of(upper(str), 'to uppercase'),
    (str) => Writer.of(lcfirst(str), 'ap lcfirst'),
  )

  assert({
    given: 'a Writer monad and two functions',
    should: 'return true in conformance to the associativity law',
    actual: equal(assoc.left.run(), assoc.right.run()),
    expected: true,
  })
})
