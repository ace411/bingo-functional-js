const head = require('./head')
const sizeOf = require('./sizeOf')
const { isUndefined, compose } = require('../Function')

const keyExists = (list, key) => {
    let ret = []
    let check = compose(head, res => isUndefined(res) ? false : res)

    if (Array.isArray(list)) {
        for (let acc = 0; acc < sizeOf(list); acc++) {
            if (key === acc) {
                ret.push(true)
            }
        }
    }

    for (let property in list) {
        if (key === property) {
            ret.push(true)
        }
    }

    return check(ret)
}

module.exports = keyExists
