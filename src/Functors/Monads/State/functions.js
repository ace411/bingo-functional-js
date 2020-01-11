const State = require('./state')

const state = (action) => State.of(state => action(state))

const put = (value) => state(state => value)

const get = () => state(state => [state, state])

const gets = (projection) => state(state => [projection(state), state])

const modify = (func) => State.of(state => [null, func(state)])

const runState = (monad, state) => monad.run(state)

const evalState = (monad, state) => {
    const [ initial, ] = monad.run(state)

    return initial
}

const execState = (monad, state) => {
    const [ , final ] = monad.run(state)

    return final
}

module.exports = { 
    get, 
    put, 
    gets, 
    state, 
    modify, 
    runState, 
    evalState, 
    execState 
}