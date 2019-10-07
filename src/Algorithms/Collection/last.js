const last = (list) => {
    if (Array.isArray(list)) {
        let count = list.length

        return list[count - 1]
    }

    let keys = Object.keys(list)

    return list[keys[keys.length - 1]]
}

module.exports = last