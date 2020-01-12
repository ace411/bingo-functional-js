const F = require('../index')
const { strArr, numArr } = require('./data')

test('extend function merges two arrays', () => {
  const merged = F.extend(strArr, numArr)

  expect(merged).toEqual(['foo', 'bar', 1, 2, 3, 4])
})
