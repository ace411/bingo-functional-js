const F = require('../index')
const { strArr, strObj } = require('./data')

test('indexOf prints index of array value', () => {
  const index = F.indexOf(strArr, 'foo')
  const nonIndex = F.indexOf(strArr, 'baz')

  expect(index).toEqual(0)
  expect(nonIndex).toEqual(undefined)
})

test('indexOf prints index of object value', () => {
  const index = F.indexOf(strObj, 'bar')
  const nonIndex = F.indexOf(strObj, 'baz')

  expect(index).toEqual('b')
  expect(nonIndex).toEqual(undefined)
})
