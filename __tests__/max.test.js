const _ = require('../index')
const { numArr, numObj } = require('./data')

test('max outputs largest value in array', () => {
    const max = _.max(numArr)

    expect(max).toEqual(4)
})

test('max outputs largest value in object', () => {
    const max = _.max(numObj)

    expect(max).toEqual(99)
})
