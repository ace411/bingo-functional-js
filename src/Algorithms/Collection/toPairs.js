const toPairs = (object) => {
  const result = []

  for (const [key, value] of Object.entries(object)) {
    result.push([key, value])
  }

  return result
}

module.exports = toPairs
