const F = require('../index')
const { numArr, numObj } = require('./data')

let func = F.partial(F.filter, (val) => val % 2 === 0)

test('filter jettisons array values that do not satisfy predicate', () => {
    const filtered = func(numArr)

    expect(filtered).toEqual([2, 4])
})

test('filter jettisons object values that do not satisfy predicate', () => {
    const filtered = func(numObj)

    expect(filtered).toEqual({ a: 12 })
})