const concat = require('./concat')

const truncate = (text, len) => {
  const txtlen = text.length

  return len < txtlen ? concat('...', text.slice(0, len), '') : text
}

module.exports = truncate
