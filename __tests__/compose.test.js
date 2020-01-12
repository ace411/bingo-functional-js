const F = require('../index')

const functions = {
  add: (x) => x + 2,
  mult: (x) => x * 2,
}

test('compose chains function calls', () => {
  const res = F.compose(functions.add, functions.mult)

  expect(res(2)).toBe(8)
})
