const _ = require('../index')

test('fromPairs creates object from array of pairs', () => {
  const fromPairs = _.fromPairs([['a', 12], ['b', 13]])

  expect(fromPairs).toEqual({ a: 12, b: 13 })
})
