const _ = require('../index')
const { factorial } = require('./data')

test('ap performs function application', () => {
  const io = _.IO(() => (str) => str.toUpperCase())
    .ap(_.IO('foo'))

  expect(io).toBeInstanceOf(_._IO)
  expect(io.exec()).toEqual('FOO')
})

test('map applies function to value encapsulated in IO', () => {
  const io = _.IO(4).map((x) => factorial(1, 4, x))

  expect(io.exec()).toEqual(1)
})

test('bind offers forward function chaining', () => {
  const io = _.IO('foo').bind((str) => _.IO(str.toUpperCase()))

  expect(io).toBeInstanceOf(_._IO)
  expect(io.exec()).toEqual('FOO')
})

test('IOException throws IO exception in IO environment', () => {
  const io = _.IOException('some exception')

  expect(io).toBeInstanceOf(_._IO)
  expect(io.exec()).toThrow(_._IOException)
})

test('catchIO gracefully handles IO Exception', () => {
  const io = _.catchIO(_.IOException('some exception'))

  expect(io).toBeInstanceOf(_._IO)
  expect(io.exec()).toEqual('some exception')
})
