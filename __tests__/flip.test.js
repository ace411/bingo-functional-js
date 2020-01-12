const F = require('../index')
const { quadEq } = require('./data')

test('flip calls function with reversed argument order', () => {
  const flipped = F.flip(quadEq, 4, 4, 1)

  expect(flipped).toBe(-2)
})
