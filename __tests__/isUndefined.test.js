const F = require('../index')
const { argObj } = require('./data')

test('isUndefined checks if value is undefined', () => {
    let val
    undef = F.isUndefined(val)
    isdef = F.isUndefined(argObj.txt)

    expect(isdef).toBeFalsy()
    expect(undef).toBe(true)
})