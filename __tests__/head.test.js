const F = require('../index')
const { numArr, numObj } = require('./data')

test('head outputs first item in array', () => {
  const head = F.head(numArr)

  expect(head).toEqual(1)
})

test('head outputs first item in object', () => {
  const head = F.head(numObj)

  expect(head).toEqual(12)
})
