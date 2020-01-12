const F = require('../index')
const { numArr, numObj } = require('./data')

const func = F.partialRight(
  F.partial(F.fold, (acc, val) => (val > acc ? val : acc)),
  0,
)

test('fold transforms array into single value', () => {
  const _max = func(numArr)

  expect(_max).toEqual(4)
})

test('fold transforms object into single value', () => {
  const _max = func(numObj)

  expect(_max).toEqual(99)
})
