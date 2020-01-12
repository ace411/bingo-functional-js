const head = require('./head')
const { isUndefined } = require('../Function')

const keyExists = (list, key) => {
  const ret = []

  for (const property in list) {
    if (key.toString() === property) {
      ret.push(true)
    }
  }

  const res = head(ret)

  return !isUndefined(res) ? res : false
}

module.exports = keyExists
