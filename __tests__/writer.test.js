const _ = require('../index')
const { fibonacci } = require('./data')

test('ap performs function application', () => {
  const writer = _.writer(fibonacci, 'init fib')
    .ap(_.writer(3, 'fib 3'))

  expect(writer).toBeInstanceOf(_.Writer)
  expect(_.runWriter(writer)).toEqual([2, ['init fib', 'fib 3']])
})

test('map applies function to value encapsulated in Writer', () => {
  const writer = _.writer(7, 'init 7').map(fibonacci)

  expect(writer).toBeInstanceOf(_.Writer)
  expect(_.runWriter(writer)).toEqual([13, ['init 7']])
})

test('bind offers forward function chaining', () => {
  const writer = _.writer(3, 'init 3')
    .bind((x) => _.writer(fibonacci(x), 'fib 3'))

  expect(writer).toBeInstanceOf(_.Writer)
  expect(_.runWriter(writer)).toEqual([2, ['init 3', 'fib 3']])
})

test('tell produces Writer monad output', () => {
  const writer = _.tell('add 2')
  const chain = writer.map((x) => x + 2)

  expect(writer).toBeInstanceOf(_.Writer)
  expect(_.runWriter(chain)).toEqual([2, ['add 2']])
})
