const fold = (func, list, acc) => {
    for (let property in list) {
        let val = list[property]

        acc = func(acc, val)
    }

    return acc
}

module.exports = fold
