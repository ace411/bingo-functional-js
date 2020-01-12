const F = require('../index')
const { numArr, numObj } = require('./data')

const func = F.partial(F.map, (val) => val * 2)

test('map applies function to all array values', () => {
  const mapped = func(numArr)

  expect(mapped).toEqual([2, 4, 6, 8])
})

test('map applies function to all object values', () => {
  const mapped = func(numObj)

  expect(mapped).toEqual({ a: 24, b: 26, c: 198 })
})
