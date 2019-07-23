const F = require('../index')
const { strArr, strObj } = require('./data')

test('pluck prints array value at specified index', () => {
    const plucked = F.pluck(strArr, 1)
    const notplucked = F.pluck(strArr, 4)

    expect(plucked).toEqual('bar')
    expect(notplucked).toEqual(undefined)
})

test('pluck prints object value at specified key', () => {
    const plucked = F.pluck(strObj, 'a')
    const notplucked = F.pluck(strObj, 'baz')

    expect(plucked).toEqual('foo')
    expect(notplucked).toEqual(undefined)
})