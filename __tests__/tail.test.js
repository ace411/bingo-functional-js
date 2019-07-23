const F = require('../index')
const { numArr, numObj } = require('./data')

test('tail outputs every array item from second to last', () => {
    const tail = F.tail(numArr)

    expect(tail).toEqual([2, 3, 4])
})

test('tail outputs every object item from second to last', () => {
    const tail = F.tail(numObj)

    expect(tail).toEqual({ b: 13, c: 99 })
})