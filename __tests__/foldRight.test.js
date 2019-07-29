const _ = require('../index')
const { strArr, strObj } = require('./data')

let func = _.partialRight(
    _.partial(_.foldRight, (acc, val) => {
        acc += _.concat('-', val, '')

        return acc
    }),
    ''
)

test('fold transforms array into single value', () => {
    const final = func(strArr)

    expect(final).toEqual('bar-foo-')
})

test('fold transforms object into single value', () => {
    const final = func(strObj)

    expect(final).toEqual('bar-foo-')
})
