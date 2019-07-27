const _ = require('../index')

test('partition splits array into multiple sub-arrays', () => {
    const split = _.partition(2, [1, 2, 3, 4, 5])

    expect(split).toEqual([[1, 2, 3], [4, 5]])
    expect(_.sizeOf(split)).toEqual(2)
})

test('paritionBy splits array into multiple sub-arrays', () => {
    const split = _.partitionBy(2, [1, 2, 3, 4, 5])

    expect(split).toEqual([[1, 2], [3, 4], [5]])
    expect(_.sizeOf(split)).toEqual(3)
})