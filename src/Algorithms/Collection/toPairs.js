const toPairs = (object) => {
  const ret = []
  for (const property in object) {
    ret.push([property, object[property]])
  }

  return ret
}

module.exports = toPairs
