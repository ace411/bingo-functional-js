const fold = require('./fold')

const reverseArray = (list) => list.reverse()

const reverseObject = (list) => {
  const keys = Object.keys(list).reverse()

  return fold((obj, value) => {
    const result = obj
    result[value] = list[value]

    return result
  }, keys, {})
}

const reverse = (list) => (Array.isArray(list)
  ? reverseArray(list)
  : reverseObject(list))

module.exports = reverse
