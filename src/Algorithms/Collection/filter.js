const sizeOf = require('./sizeOf')

const filter = (func, list) => {
    if (Array.isArray(list)) {
        let res = []
        for (let x = 0; x < sizeOf(list); x++) {
            if (func(list[x])) res.push(list[x])
        }
        return res
    }

    let res = {}
    for (let property in list) {
        let val = list[property]
        if (func(val)) {
            res[property] = val
        }
    }

    return res
}

module.exports= filter
