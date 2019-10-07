const _ = require('../index')
const { numArr, numObj } = require('./data')

test('min outputs lowest value in array', () => {
    const min = _.min(numArr)

    expect(min).toEqual(1)
})

test('min outputs lowest value in object', () => {
    const min = _.min(numObj)

    expect(min).toEqual(12)
})
