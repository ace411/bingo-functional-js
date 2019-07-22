const toException = (func) => {
    return (...args) => {
        try {
            return func(...args)
        } catch (exception) {
            return exception
        }
    }
}

module.exports = toException