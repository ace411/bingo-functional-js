const _ = require('../index')
const { numObj, numArr } = require('./data')

test('keysExist checks if multiple keys exist in an array', () => {
    const func = _.partial(_.keysExist, numArr)

    const keysExist = func(0, 1)
    const keysNotExist = func(0, 6)

    expect(keysExist).toEqual(true)
    expect(keysNotExist).toEqual(false)
})

test('keysExist checks if multiple keys exist in an object', () => {
    const func = _.partial(_.keysExist, numObj)

    const keysExist = func('a', 'b')
    const keysNotExist = func('c', 'd', 'f')

    expect(keysExist).toEqual(true)
    expect(keysNotExist).toEqual(false)
})