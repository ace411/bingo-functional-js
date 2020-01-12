const F = require('../index')
const { strArr, strObj } = require('./data')

const func = {
  neg: F.partialRight(F.every, (val) => val.length > 3),
  pos: F.partialRight(F.every, (val) => val.length > 0),
  break: F.partialRight(F.every, (val) => F.isEmpty(val.match(/foo+/))),
}

test('every function checks if all array values satisfy predicate', () => {
  const neg = func.neg(strArr)
  const pos = func.pos(strArr)

  expect(neg).toBeFalsy()
  expect(pos).toEqual(true)
})

test('every function checks if all object values satisfy predicate', () => {
  const pos = func.pos(strObj)
  const neg = func.neg(strObj)

  expect(neg).toBeFalsy()
  expect(pos).toEqual(true)
})

test('every function returns false when one value fails to satisfy predicate', () => {
  const broken = func.break(strObj)

  expect(broken).toBeFalsy()
})
