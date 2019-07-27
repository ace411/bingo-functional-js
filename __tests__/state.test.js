const _ = require('../index')
const { fibonacci } = require('./data')

test('ap performs function application', () => {
    const state = _.state(fibonacci).ap(_.State.of(3))

    expect(state).toBeInstanceOf(_.State)
    expect(state.run(12)).toEqual([2, 12])
})

test('map applies function to value encapsulated in State', () => {
    const state = _.State.of(3).map(fibonacci)

    expect(state).toBeInstanceOf(_.State)
    expect(state.run(2)).toEqual([2, 2])
})

test('bind offers forward function chaining', () => {
    const state = _.State.of(3).bind(x => _.State.of(fibonacci(x)))

    expect(state).toBeInstanceOf(_.State)
    expect(state.run(3)).toEqual([2, 3])
})

test('put replaces state inside the monad', () => {
    const state = _.put(2)

    expect(state).toBeInstanceOf(_.State)
    expect(_.evalState(state, null)(3)).toEqual(2)
    expect(_.execState(state, 4)).toEqual(4)
})

test('get returns the state inside the monad', () => {
    const state = _.get()

    expect(state).toBeInstanceOf(_.State)
    expect(_.execState(state, 3)).toEqual(3)
    expect(_.evalState(state, 3)).toBeInstanceOf(Function)
})

test('gets transforms initial state component with function', () => {
    const state = _.gets(x => Math.pow(x, 2))

    expect(state).toBeInstanceOf(_.State)
    expect(_.evalState(state, null)(4)).toEqual([16, 4])
})

test('modify maps old state to new state', () => {
    const state = _.modify(fibonacci)

    expect(state).toBeInstanceOf(_.State)
    expect(_.evalState(state, 2)(3)).toEqual([null, 2])
    expect(_.execState(state, 3)).toEqual(3)
})

test('runState unwraps state monad computation', () => {
    const state = _.runState(_.State.of(2), 3)

    expect(state).toEqual([2, 3])
})