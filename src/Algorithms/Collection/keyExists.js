const head = require('./head')
const { isUndefined } = require('../Function')

const keyExists = (list, key) => {
    let ret = []

    for (let property in list) {
        if (key.toString() === property) {
            ret.push(true)
        }
    }

    let res = head(ret)

    return !isUndefined(res) ? res : false
}

module.exports = keyExists
