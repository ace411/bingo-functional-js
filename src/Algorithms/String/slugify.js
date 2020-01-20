const concat = require('./concat')

const slugify = (text) => concat('-', ...text.split(' '))

module.exports = slugify
