const f = require('../index')

test('mcompose composes two monadic values from right to left', () => {
    const result = f.mcompose(x => f.fromValue(x + 2), f.fromValue)

    expect(result(f.fromValue(2))).toBeInstanceOf(f.Monadic)
    expect(result(f.fromValue(3)).getJust()).toEqual(5)
})

test('bind sequentially composes two monadic actions', () => {
    const mbind = f.bind(x => f.fromValue(x + 2), f.fromValue(2))

    expect(mbind).toBeInstanceOf(f.Monadic)
    expect(mbind.getJust()).toEqual(4)
})
