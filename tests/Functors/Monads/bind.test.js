const { describe } = require('riteway')
const fs = require('fs')
const {
  bind,
  State,
  _IO: IOMonad,
  IO,
  Reader,
  Maybe,
  Just,
  Writer,
  isFunction,
} = require('../../../index')

describe('bind()', async (assert) => {
  const square = (val) => val ** 2
  const cube = (val) => val ** 3
  const unsafe = () => fs.readFileSync(`${__dirname}/IO/data.txt`, { encoding: 'utf-8' })
  const ucfirst = (str) => `${str.charAt(0).toUpperCase()}${str.substr(1)}`

  assert({
    given: 'a State monad instance and function',
    should: 'return a State monad instance',
    actual: bind(
      (val) => State.of(ucfirst(val)),
      State.of('foo'),
    ) instanceof State,
    expected: true,
  })

  assert({
    given: 'a State monad instance and function',
    should: 'sequentially compose two State actions',
    actual: bind(
      (val) => State.of(ucfirst(val)),
      State.of('foo'),
    ).run('bar'),
    expected: ['Foo', 'bar'],
  })

  assert({
    given: 'a Reader monad instance and function',
    should: 'return a Reader monad instance',
    actual: bind(
      (val) => Reader.of(cube(val)),
      Reader.of(square),
    ) instanceof Reader,
    expected: true,
  })

  assert({
    given: 'a Reader monad instance and function',
    should: 'sequentially compose two Reader actions',
    actual: bind(
      (val) => Reader.of(cube(val)),
      Reader.of(square),
    ).run(2),
    expected: 64,
  })

  assert({
    given: 'an IO monad instance and function',
    should: 'return an IO monad instance',
    actual: bind(
      (txt) => IO(ucfirst(txt)),
      IO(unsafe),
    ) instanceof IOMonad,
    expected: true,
  })

  assert({
    given: 'an IO monad instance and function',
    should: 'sequentially compose two IO functions',
    actual: bind(
      (txt) => IO(ucfirst(txt)),
      IO(unsafe),
    ).exec(),
    expected: 'Bingo-functional-js.',
  })

  assert({
    given: 'a Maybe instance and function',
    should: 'return a Maybe monad instance',
    actual: bind(
      (val) => Maybe.fromValue(cube(val)),
      Maybe.fromValue(square(2)),
    ) instanceof Just,
    expected: true,
  })

  assert({
    given: 'a Maybe instance and function',
    should: 'sequentially compose two Maybe functions',
    actual: bind(
      (val) => Maybe.fromValue(cube(val)),
      Maybe.fromValue(square(2)),
    ).getJust(),
    expected: 64,
  })

  assert({
    given: 'a Writer instance and function',
    should: 'return a Writer monad instance',
    actual: bind(
      (val) => Writer.of(square(val), 'square value'),
      Writer.of(2, 'put 2'),
    ) instanceof Writer,
    expected: true,
  })

  assert({
    given: 'a Writer instance and function',
    should: 'sequentially compose two Writer functions',
    actual: bind(
      (val) => Writer.of(square(val), 'square value'),
      Writer.of(2, 'put 2'),
    ).run(),
    expected: [4, ['put 2', 'square value']],
  })

  assert({
    given: 'no arguments',
    should: 'return a function',
    actual: isFunction(bind()),
    expected: true,
  })
})
