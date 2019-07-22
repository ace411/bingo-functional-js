const flip = (func, ...args) => {
    const argList = args.reverse()

    return func(...argList)
}

module.exports = flip