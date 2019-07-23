const F = require('../index')
const { strArr } = require('./data')

let func = F.partialRight(F.pick, 'foo')

test('pick prints value if it is in array', () => {
    const picked = func(strArr)
    const notPicked = F.pick(strArr, 'baz')

    expect(picked).toEqual('foo')
    expect(notPicked).toEqual(undefined)
})