const fold = (func, list, acc) => {
    let isArr = Array.isArray(list)
    let surface = isArr ? list : Object.keys(list)

    for (let x = 0; x < surface.length; x++) {
        acc = isArr
            ? func(acc, surface[x])
            : func(acc, list[surface[x]])
    }

    return acc
}

module.exports = fold