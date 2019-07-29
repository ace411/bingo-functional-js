const fold = require('./fold')
const head = require('./head')

const min = list => {
    let res = fold((acc, val) => val < acc ? val : acc, list, head(list))

    return res
}

module.exports = min
