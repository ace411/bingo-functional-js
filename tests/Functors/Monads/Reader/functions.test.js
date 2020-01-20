const { describe, Try } = require('riteway')
const {
  ask,
  reader,
  runReader,
  mapReader,
  identity,
  Reader,
} = require('../../../../index')

describe('runReader()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw error',
    actual: Try(runReader).toString(),
    expected: 'TypeError: Cannot read property \'run\' of undefined',
  })

  assert({
    given: 'a Reader instance and arbitrary value',
    should: 'return the result of the transformation that occurs in the Reader environment',
    actual: runReader(reader((name) => `Hello ${name}`), 'World'),
    expected: 'Hello World',
  })
})

describe('mapReader()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'throw error',
    actual: Try(mapReader).toString(),
    expected: 'TypeError: Cannot read property \'map\' of undefined',
  })

  assert({
    given: 'a function and Reader instance',
    should: 'return a Reader instance',
    actual: mapReader((val) => val ** 2, reader(identity)) instanceof Reader,
    expected: true,
  })
})

describe('ask()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return a Reader instance',
    actual: ask() instanceof Reader,
    expected: true,
  })
})
