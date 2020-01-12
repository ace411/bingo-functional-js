const F = require('../index')
const { argObj } = require('./data')

test('identity function returns value supplied', () => {
  expect(F.identity(argObj.obj)).toBe(argObj.obj)
  expect(F.identity(argObj.txt)).toBe(argObj.txt)
  expect(F.identity(argObj.num)).toBe(argObj.num)
})
