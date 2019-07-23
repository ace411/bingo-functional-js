const map = (func, list) => {
    if (Array.isArray(list)) {
        let res = []
        for (let x = 0; x < list.length; x++) {
            res.push(func(list[x]))
        }
        return res
    }

    let res = {}
    let keys = Object.keys(list)
    for (let x = 0; x < keys.length; x++) {
        let _key = keys[x]
        res[_key] = func(list[_key])
    }

    return res
} 

module.exports = map