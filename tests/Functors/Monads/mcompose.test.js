const { describe } = require('riteway')
const fs = require('fs')
const {
  mcompose,
  State,
  _IO: IOMonad,
  IO,
  Reader,
  fromValue,
  Just,
  Writer,
  identity,
  isFunction,
} = require('../../../index')

describe('mcompose()', async (assert) => {
  const readFile = (file) => IO(fs.readFileSync(file, { encoding: 'utf-8' }))

  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(mcompose()),
    expected: true,
  })

  assert({
    given: 'two IO monad functions',
    should: 'return an IO monad instance',
    actual: mcompose(
      (txt) => IO(txt.toUpperCase()),
      readFile,
    )(IO(`${__dirname}/IO/data.txt`)) instanceof IOMonad,
    expected: true,
  })

  assert({
    given: 'two IO monad functions',
    should: 'compose two IO functions from right-to-left',
    actual: mcompose(
      (txt) => IO(txt.toUpperCase()),
      readFile,
    )(IO(`${__dirname}/IO/data.txt`)).exec(),
    expected: 'BINGO-FUNCTIONAL-JS.',
  })

  assert({
    given: 'two State monad functions',
    should: 'return a State monad',
    actual: mcompose(
      (val) => State.of(val ** 2),
      (val) => State.of(val ** 3),
    )(State.of(2)) instanceof State,
    expected: true,
  })

  assert({
    given: 'two State monad functions',
    should: 'compose the functions from right-to-left',
    actual: mcompose(
      (val) => State.of(val ** 2),
      (val) => State.of(val ** 3),
    )(State.of(2)).run('even'),
    expected: [64, 'even'],
  })

  const fib = (val) => (val < 2 ? val : fib(val - 1) + fib(val - 2))

  assert({
    given: 'two Reader monad functions',
    should: 'return a Reader monad',
    actual: mcompose(
      (val) => Reader.of(fib(val)),
      (val) => Reader.of(val ** 2),
    )(Reader.of(identity)) instanceof Reader,
    expected: true,
  })

  assert({
    given: 'two Reader monad functions',
    should: 'compose the functions from right-to-left',
    actual: mcompose(
      (val) => Reader.of(fib(val)),
      (val) => Reader.of(val ** 2),
    )(Reader.of(identity)).run(2),
    expected: 3,
  })

  assert({
    given: 'two Writer monad functions',
    should: 'return a Writer monad',
    actual: mcompose(
      (val) => Writer.of(fib(val), 'fib val'),
      (val) => Writer.of(val ** 2, 'square val'),
    )(Writer.of(2, 'put 2')) instanceof Writer,
    expected: true,
  })

  assert({
    given: 'two Writer monad functions',
    should: 'compose the functions from right-to-left',
    actual: mcompose(
      (val) => Writer.of(fib(val), 'fib val'),
      (val) => Writer.of(val ** 2, 'square val'),
    )(Writer.of(2, 'put 2')).run(),
    expected: [3, ['put 2', 'square val', 'fib val']],
  })

  assert({
    given: 'two Maybe monad functions',
    should: 'return a Maybe type',
    actual: mcompose(
      (val) => fromValue(fib(val)),
      (val) => fromValue(val ** 2),
    )(fromValue(6)) instanceof Just,
    expected: true,
  })

  assert({
    given: 'two Maybe monad functions',
    should: 'compose the functions from right-to-left',
    actual: mcompose(
      (val) => fromValue(fib(val)),
      (val) => fromValue(val ** 2),
    )(fromValue(6)).getJust(),
    expected: 14930352,
  })
})
