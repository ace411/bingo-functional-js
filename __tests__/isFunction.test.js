const F = require('../index')
const { argObj } = require('./data')

test('isFunction checks if value is function', () => {
    func = F.isFunction(argObj.func)
    nonFunc = F.isFunction(argObj.txt)

    expect(func).toBe(true)
    expect(nonFunc).toBeFalsy()
})