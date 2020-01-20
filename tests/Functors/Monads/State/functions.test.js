const { describe } = require('riteway')
const {
  put,
  get,
  gets,
  state,
  State,
  modify,
  compose,
  runState,
  evalState,
  execState,
  isFunction,
} = require('../../../../index')

describe('state()', async (assert) => {
  const square = state((val) => val ** 2)

  assert({
    given: 'an arbitrary function',
    should: 'return a State monad instance',
    actual: square instanceof State,
    expected: true,
  })

  assert({
    given: 'an arbitrary function',
    should: 'embed a simple action into a State monad environment',
    actual: isFunction(evalState(square, undefined)),
    expected: true,
  })
})

describe('put()', async (assert) => {
  assert({
    given: 'an arbitrary value',
    should: 'return a State monad instance',
    actual: put('foo') instanceof State,
    expected: true,
  })

  assert({
    given: 'an arbitrary value',
    should: 'replace the state function in the State monad',
    actual: evalState(put('foo'), undefined)(),
    expected: 'foo',
  })
})

describe('get()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return a State monad instance',
    actual: get() instanceof State,
    expected: true,
  })

  assert({
    given: 'no arguments',
    should: 'return the state from the internals of the State monad',
    actual: Array.isArray(evalState(get(), undefined)('foo')),
    expected: true,
  })
})

describe('gets()', async (assert) => {
  const projection = gets((txt) => {
    const func = compose(
      (str) => str.toLowerCase(),
      (str) => `${str.charAt(0).toUpperCase()}${str.substr(1)}`,
    )

    return func(txt)
  })

  assert({
    given: 'a function',
    should: 'return a State monad instance',
    actual: projection instanceof State,
    expected: true,
  })

  assert({
    given: 'a function',
    should: 'return a transformed State monad component',
    actual: evalState(projection, undefined)('FOO'),
    expected: ['Foo', 'FOO'],
  })
})

describe('modify()', async (assert) => {
  const square = (val) => val ** 2

  assert({
    given: 'no arguments',
    should: 'return a State instance',
    actual: modify() instanceof State,
    expected: true,
  })

  assert({
    given: 'a transformative function',
    should: 'return a State instance',
    actual: modify(square) instanceof State,
    expected: true,
  })

  assert({
    given: 'an arbitrary transformative function',
    should: 'replace the state in the State monad',
    actual: evalState(modify(square), null)(4),
    expected: [null, 16],
  })
})

describe('runState()', async (assert) => {
  assert({
    given: 'a State monad and arbitrary value',
    should: 'unwraps a State monad computation',
    actual: runState(State.of('foo'), 'bar'),
    expected: ['foo', 'bar'],
  })
})

describe('evalState()', async (assert) => {
  assert({
    given: 'a State monad and arbitrary value',
    should: 'return the final value',
    actual: evalState(State.of('foo'), 'bar'),
    expected: 'foo',
  })
})

describe('execState()', async (assert) => {
  assert({
    given: 'a State monad and arbitrary value',
    should: 'return the final state',
    actual: execState(State.of('foo'), 'bar'),
    expected: 'bar',
  })
})
