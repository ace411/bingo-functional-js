const _ = require('../index')
const { numObj, numArr } = require('./data')

test('mean computes the average of elements in array', () => {
  const mean = _.mean(numArr)

  expect(mean).toEqual(2.5)
})

test('mean computes the average of elements in object', () => {
  const mean = _.mean(numObj)

  expect(mean).toEqual(124 / 3)
})
