const filter = (func, list) => {
    if (Array.isArray(list)) {
        let res = []
        for (let x = 0; x < list.length; x++) {
            if (func(list[x])) res.push(list[x])
        }
        return res
    }

    let res = {}
    let keys = Object.keys(list)
    for (let x = 0; x < keys.length; x++) {
        let _key = keys[x]
        if (func(list[_key])) res[_key] = list[_key]
    }

    return res
}

module.exports= filter