const fold = require('./fold')

const max = list => {
    let res = fold((acc, val) => val > acc ? val : acc, list, 0)

    return res
}

module.exports = max
