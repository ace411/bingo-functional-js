const F = require('../index')
const { strArr, strObj } = require('./data')

const func = F.partialRight(F.dropRight, 1)

test('dropRight removes elements from the end of an array', () => {
  const dropped = func(strArr)

  expect(dropped).toEqual(['foo'])
})

test('dropRight removes elements from end of object', () => {
  const dropped = func(strObj)

  expect(dropped).toEqual({ a: 'foo' })
})
