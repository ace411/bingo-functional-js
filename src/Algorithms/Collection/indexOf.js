const head = require('./head')

const indexOf = (haystack, needle) => {
    let search = Array.isArray(haystack) 
        ? haystack 
        : Object.keys(haystack)
    var index = []

    for (let acc = 0; acc < search.length; acc++) {
        if (Array.isArray(haystack)) {
            needle === haystack[acc] && index.push(acc)
        }
        needle === haystack[search[acc]] && index.push(search[acc])
    }

    return head(index)
}

module.exports = indexOf