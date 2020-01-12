const F = require('../index')
const { factorial } = require('./data')

test('memoize function is HOF', () => {
  const memoized = F.memoize(factorial)

  expect(memoized).toBeInstanceOf(Function)
})

test('memoize function outputs function result', () => {
  const memoized = F.memoize(factorial)

  expect(memoized(5)).toBe(120)
})
