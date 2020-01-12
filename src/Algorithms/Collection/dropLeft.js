const dropLeft = (list, count = 1) => {
  if (Array.isArray(list)) {
    list.splice(0, count)
    return list
  }

  const keys = Object.keys(list)
  keys.splice(0, count)

  return keys.reduce((obj, key) => {
    obj[key] = list[key]

    return obj
  }, {})
}

module.exports = dropLeft
