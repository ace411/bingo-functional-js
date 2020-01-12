const last = (list) => {
  if (Array.isArray(list)) {
    const count = list.length

    return list[count - 1]
  }

  const keys = Object.keys(list)

  return list[keys[keys.length - 1]]
}

module.exports = last
