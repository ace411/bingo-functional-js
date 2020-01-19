const Reader = require('./reader')

const reader = (operation) => Reader.of(operation)

const runReader = (instance, val) => instance.run(val)

const mapReader = (func, instance) => instance.map(func)

const ask = () => Reader.of((x) => x)

module.exports = {
  reader, runReader, mapReader, ask,
}
