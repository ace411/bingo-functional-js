const F = require('../index')
const { strObj, strArr } = require('./data')

test('sizeOf evaluates to list count', () => {
    const objCount = F.sizeOf(strObj)
    const arrCount = F.sizeOf(strArr)

    expect(objCount).toBe(2)
    expect(arrCount).toBe(2)
})