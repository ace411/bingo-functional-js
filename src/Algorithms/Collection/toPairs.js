const toPairs = object => {
    let ret = []
    for (let property in object) {
        ret.push([property, object[property]])
    }

    return ret
}

module.exports = toPairs
