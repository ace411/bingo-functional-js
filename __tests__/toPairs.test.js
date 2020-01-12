const _ = require('../index')
const { strObj } = require('./data')

test('toPairs creates pairs from object', () => {
  const toPairs = _.toPairs(strObj)

  expect(toPairs).toEqual([['a', 'foo'], ['b', 'bar']])
})
