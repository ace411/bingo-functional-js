const head = (list) => (Array.isArray(list)
  ? list[0]
  : Object.values(list)[0])

module.exports = head
