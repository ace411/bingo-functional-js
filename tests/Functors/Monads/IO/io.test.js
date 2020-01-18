const { describe } = require('riteway')
const equal = require('deep-equal')
const fs = require('fs')
const laws = require('../../laws')
const { IO, _IO: IOMonad } = require('../../../../index')

describe('IO', async (assert) => {
  const unsafe = () => fs.readFileSync(`${__dirname}/data.txt`, { encoding: 'utf-8' })
  const upper = (txt) => txt.toUpperCase()
  const lcfirst = (str) => `${str.charAt(0).toLowerCase()}${str.substr(1)}`

  const id = laws.identity(IO(unsafe))

  assert({
    given: 'an arbitrary unsafe operation',
    should: 'return true in conformance to the identity law',
    actual: equal(id.left.exec(), id.right.exec()),
    expected: true,
  })

  const composition = laws.composition(IO(unsafe), upper, lcfirst)

  assert({
    given: 'an arbitrary IO instance and functions',
    should: 'return true in conformance to the composition law',
    actual: equal(composition.left.exec(), composition.right.exec()),
    expected: true,
  })

  const left = laws.leftIdentity(IO(unsafe), (txt) => IO(upper(txt)), unsafe())

  assert({
    given: 'an IO monad instance, function, and unsafe operation',
    should: 'return true in conformance to the left identity law',
    actual: equal(left.left.exec(), left.right.exec()),
    expected: true,
  })

  const right = laws.rightIdentity(IOMonad.of(unsafe), (new IOMonad(unsafe)))

  assert({
    given: 'two IO instances',
    should: 'return true in conformance to the right identity law',
    actual: equal(right.left.exec(), right.right.exec()),
    expected: true,
  })

  const assoc = laws.associativity(IO(unsafe), (val) => IO(upper(val)), (val) => IO(lcfirst(val)))

  assert({
    given: 'an IO monad instance and arbitrary functions',
    should: 'return true in conformance to the associativity law',
    actual: equal(assoc.left.exec(), assoc.right.exec()),
    expected: true,
  })
})
