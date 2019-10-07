const sizeOf = list => Array.isArray(list)
    ? list.length
    : Object.values(list).length 

module.exports = sizeOf