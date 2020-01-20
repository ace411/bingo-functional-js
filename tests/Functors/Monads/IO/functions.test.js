const { describe } = require('riteway')
const fs = require('fs')
const {
  catchIO,
  IO,
  IOException,
  _IO: IOMonad,
  toException,
} = require('../../../../index')

const exp = IOException('IO exception')

describe('IOException()', async (assert) => {
  assert({
    given: 'an exception message',
    should: 'return an IO instance',
    actual: exp instanceof IOMonad,
    expected: true,
  })

  assert({
    given: 'an exception message',
    should: 'return an IO instance',
    actual: toException(exp.exec())(),
    expected: 'IO exception',
  })
})

describe('catchIO()', async (assert) => {
  const unsafe = () => fs.readFileSync(`${__dirname}/data.txt`, { encoding: 'utf-8' })

  const catchExp = catchIO(exp)

  assert({
    given: 'an unsafe exception harboring function encapsulated in IO instance',
    should: 'return IO instance',
    actual: catchExp instanceof IOMonad,
    expected: true,
  })

  assert({
    given: 'an unsafe exception harboring function encapsulated in IO instance',
    should: 'return an exception message encapsulated in IO instance',
    actual: catchExp.exec(),
    expected: 'IO exception',
  })

  const catchRegular = catchIO(IO(unsafe))

  assert({
    given: 'an IO instance bearing an unsafe operation that does not throw an exception',
    should: 'return IO instance',
    actual: catchRegular instanceof IOMonad,
    expected: true,
  })

  assert({
    given: 'an IO instance bearing an unsafe operation that does not throw an exception',
    should: 'return non-exception value',
    actual: catchRegular.exec(),
    expected: 'bingo-functional-js.',
  })
})
