const _ = require('../index')

test('isNumeric discerns if string has numeric value', () => {
  const isNumeric = _.isNumeric('21')
  const notNumeric = _.isNumeric('foo')

  expect(isNumeric).toEqual(true)
  expect(notNumeric).toBeFalsy()
})
