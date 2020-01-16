const firstVal = (list) => list[0]

const head = (list) => (Array.isArray(list)
  ? firstVal(list)
  : firstVal(Object.values(list)))

module.exports = head
