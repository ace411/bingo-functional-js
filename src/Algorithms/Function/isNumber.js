const isNumber = (val) => typeof val === 'number' && !Number.isNaN(val)

module.exports = isNumber
