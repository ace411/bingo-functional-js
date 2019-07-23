const fold = (func, list, acc) => {
    let surface = Array.isArray(list) 
        ? list 
        : Object.keys(list)

    for (let x = 0; x < surface.length; x++) {
        acc = Array.isArray(list)
            ? func(acc, surface[x])
            : func(acc, list[surface[x]])
    }

    return acc
}

module.exports = fold