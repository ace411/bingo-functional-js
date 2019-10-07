const map = (func, list) => {
    let res = Array.isArray(list) ? [] : {}
    for (let property in list) {
        res[property] = func(list[property])
    }

    return res
}

module.exports = map
