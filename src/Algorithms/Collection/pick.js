const pick = (haystack, needle) => {
    let result
    haystack.forEach((item) => {
        if (item === needle)
            result = item
    })

    return result
}

module.exports = pick