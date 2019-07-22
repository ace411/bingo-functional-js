const F = require('../index')
const { factorial } = require('./data')

test('toException gracefully handles exception', () => {
    const func = (x) => {
        throw `${x} value exception`
    }
    const thrown = F.toException(func)(2)
    const notThrown = F.toException(factorial)(5)

    expect(thrown).toBe('2 value exception')
    expect(notThrown).toBe(120)
})