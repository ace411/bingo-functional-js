const Reader = require('./reader')

const reader = (operation) => Reader.of(operation)

const runReader = (reader, val) => reader.run(val)

const mapReader = (func, reader) => reader.map(func)

const ask = () => Reader.of((x) => x)

module.exports = { reader, runReader, mapReader, ask }