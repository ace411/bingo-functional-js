const { describe } = require('riteway')
const {
  tell, writer, runWriter, execWriter, Writer,
} = require('../../../../index')

describe('tell()', async (assert) => {
  assert({
    given: 'an arbitrary value',
    should: 'return a Writer instance',
    actual: tell('put 2') instanceof Writer,
    expected: true,
  })

  assert({
    given: 'an arbitrary value',
    should: 'eventually evaluate to a null-singleton array value pair',
    actual: runWriter(tell('put 2')),
    expected: [null, ['put 2']],
  })

  assert({
    given: 'undefined',
    should: 'eventually evaluate to a null-empty array array value pair',
    actual: runWriter(tell(undefined)),
    expected: [null, []],
  })
})

describe('writer()', async (assert) => {
  assert({
    given: 'two arbitrary initial result and output values',
    should: 'return a Writer monad',
    actual: writer('foo', 'put str') instanceof Writer,
    expected: true,
  })

  assert({
    given: 'two arbitrary initial result and output values',
    should: 'eventually return a result-output pair',
    actual: runWriter(writer('foo', 'put str')),
    expected: ['foo', ['put str']],
  })

  assert({
    given: 'an arbitrary initial result value and undefined',
    should: 'eventually return an array containing the initial result and an empty array',
    actual: runWriter(writer(2, undefined)),
    expected: [2, []],
  })

  assert({
    given: 'an arbitrary initial result value and an empty value',
    should: 'eventually return an array containing the initial result and an empty array',
    actual: runWriter(writer(2, '')),
    expected: [2, []],
  })
})

describe('runWriter()', async (assert) => {
  assert({
    given: 'a Writer monad',
    should: 'unwrap the Writer computation as a result-output pair',
    actual: runWriter(writer(2, 'put 2')),
    expected: [2, ['put 2']],
  })
})

describe('execWriter()', async (assert) => {
  assert({
    given: 'a Writer monad',
    should: 'extract the output from the Writer monad',
    actual: execWriter(writer(2, 'put 2')),
    expected: ['put 2'],
  })
})
