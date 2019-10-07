const head = require('./head')
const { isNumeric } = require('../Function')

const indexOf = (haystack, needle) => {
    let index = []

    for (let property in haystack) {
        let val = haystack[property]

        if (val === needle) {
            index.push(
                isNumeric(property)
                    ? Number.parseInt(property)
                    : property
            )
        }
    }

    return head(index)
}

module.exports = indexOf
