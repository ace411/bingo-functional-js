const F = require('../index')
const { strArr, strObj } = require('./data')

let func = {
    neg: F.partialRight(F.any, (val) => val.length > 3),
    pos: F.partialRight(F.any, (val) => val.length > 0)
}

test('any function checks if at least one array value satisfies predicate', () => {
    const neg = func.neg(strArr)
    const pos = func.pos(strArr)

    expect(neg).toBeFalsy()
    expect(pos).toEqual(true)
})

test('any function checks if at least one object value satisfies predicate', () => {
    const pos = func.pos(strObj)
    const neg = func.neg(strObj)

    expect(neg).toBeFalsy()
    expect(pos).toEqual(true)
})