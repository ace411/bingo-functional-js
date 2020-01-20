const { describe } = require('riteway')
const equal = require('deep-equal')
const { reader, Reader, identity } = require('../../../../index')
const laws = require('../../laws')

describe('Reader', async (assert) => {
  const greet = (name) => `Hello ${name}`
  const square = (val) => val ** 2
  const cube = (val) => val ** 3

  const id = laws.identity(reader(greet))

  assert({
    given: 'an arbitrary operation',
    should: 'return true in conformance to the identity law',
    actual: equal(id.left.run('chemem'), id.right.run('chemem')),
    expected: true,
  })

  const composition = laws.composition(reader(identity), square, cube)

  assert({
    given: 'a reader instance and functions',
    should: 'return true in conformance to the composition law',
    actual: equal(composition.left.run(2), composition.right.run(2)),
    expected: true,
  })

  const left = laws.leftIdentity(
    reader(greet),
    (greeting) => reader((name) => `${greeting}. ${name === 'world' ? 'Sup?' : 'How are you?'}`),
    greet('chemem'),
  )

  assert({
    given: 'a Reader instance, function, and Reader value',
    should: 'return true in conformance to the left identity law',
    actual: equal(left.left.run('chemem'), left.right.run('chemem')),
    expected: true,
  })

  const right = laws.rightIdentity(reader(greet), (new Reader(greet)))

  assert({
    given: 'two subtly different Reader instances',
    should: 'return true in conformance to the right identity law',
    actual: equal(right.left.run('chemem'), right.right.run('chemem')),
    expected: true,
  })

  const assoc = laws.associativity(
    reader(identity),
    (val) => reader(square(val)),
    (val) => reader(cube(val)),
  )

  assert({
    given: 'a Reader instance and two functions',
    should: 'return true in conformance to the associativity law',
    actual: equal(assoc.left.run(2), assoc.right.run(2)),
    expected: true,
  })
})
