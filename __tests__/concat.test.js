const F = require('../index')

test('concat ties multiple strings together with wildcard', () => {
  const func = F.partialRight(F.concat, 'js', 'functional', 'bingo')

  expect(func('-')).toBe('bingo-functional-js')
  expect(func(':')).toBe('bingo:functional:js')
})
