const reverse = (list) => {
  if (Array.isArray(list)) return list.reverse()

  return Object.keys(list).reverse().reduce((obj, key) => {
    obj[key] = list[key]

    return obj
  }, {})
}

module.exports = reverse
