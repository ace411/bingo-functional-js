const head = require('./head')

const indexOf = (haystack, needle) => {
    let isArray = Array.isArray(haystack)
    let search = isArray ? haystack : Object.keys(haystack)
    let index = []

    for (let acc = 0; acc < search.length; acc++) {
        if (isArray) {
            needle === haystack[acc] && index.push(acc)
        }
        needle === haystack[search[acc]] && index.push(search[acc])
    }

    return head(index)
}

module.exports = indexOf
