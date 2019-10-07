const F = require('../index')
const { quadEq } = require('./data')

test('partial is HOF', () => {
    const partial = F.partial(quadEq, 1, 4)

    expect(partial).toBeInstanceOf(Function)
})

test('partial partially applies arguments to function from left-to-right', () => {
    const partial = F.partial(quadEq, 1, 4)

    expect(partial(4)).toBe(-2)
})

test('partialRight partially applies arguments to function from right-to-left', () => {
    const _partial = F.partialRight(quadEq, 4, 4)

    expect(_partial(1)).toBe(-2)
})