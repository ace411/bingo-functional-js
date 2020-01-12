const _ = require('../index')
const { numObj, numArr } = require('./data')

test('keyExists checks if key exists in an array', () => {
  const exists = _.keyExists(numArr, 1)
  const notExists = _.keyExists(numArr, 5)

  expect(exists).toEqual(true)
  expect(notExists).toEqual(false)
})

test('keyExists checks if key exists in an object', () => {
  const exists = _.keyExists(numObj, 'a')
  const notExists = _.keyExists(numObj, 'd')

  expect(exists).toEqual(true)
  expect(notExists).toEqual(false)
})
