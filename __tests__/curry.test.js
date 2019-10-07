const F = require('../index')
const { quadEq } = require('./data')

test('curry function allows for application of arguments one by one', () => {
    const ret = F.curry(quadEq)

    expect(ret(1)(4)(4)).toBe(-2)
})

test('curry function is HOC', () => {
    const ret = F.curry(quadEq)

    expect(ret(1)).toBeInstanceOf(Function)
})