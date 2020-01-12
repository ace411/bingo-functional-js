const F = require('../index')

test('truncate shortens string and appends ellipsis to resultant string', () => {
  const truncated = F.truncate('lorem ipsum dolor sit amet', 5)

  expect(truncated).toBe('lorem...')
})
