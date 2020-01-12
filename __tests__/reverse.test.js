const F = require('../index')
const { numArr, numObj } = require('./data')

test('reverse prints array with items in reverse order', () => {
  const reversed = F.reverse(numArr)

  expect(reversed).toEqual([4, 3, 2, 1])
})

test('reverse prints object with items in reverse order', () => {
  const reversed = F.reverse(numObj)

  expect(reversed).toEqual({ c: 99, b: 13, a: 12 })
})
