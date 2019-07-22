const F = require('../index')
const { argObj } = require('./data')

test('constantFunction outputs function encapsulated in function', () => {
    const res = F.constantFunction(argObj)

    expect(res).toBeInstanceOf(Function)
})

test('constantFunction is HOC', () => {
    const res = F.constantFunction(argObj)

    expect(res()).toBe(argObj)
})