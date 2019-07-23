const F = require('../index')
const { numArr, numObj } = require('./data')

test('last outputs last item in array', () => {
    const last = F.last(numArr)

    expect(last).toEqual(4)
})

test('last outputs last item in object', () => {
    const last = F.last(numObj)

    expect(last).toEqual(99)
})