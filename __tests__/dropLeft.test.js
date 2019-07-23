const F = require('../index')
const { strArr, strObj } = require('./data')

let func = F.partialRight(F.dropLeft, 1)

test('dropLeft removes elements from the beginning of an array', () => {
    const dropped = func(strArr)

    expect(dropped).toEqual(['bar'])
})

test('dropLeft removes elements from beginning of object', () => {
    const dropped = func(strObj)

    expect(dropped).toEqual({ b: 'bar' })
})