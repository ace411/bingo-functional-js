const extend = require('../../../Algorithms/Collection/extend')
const { isEmpty, isUndefined } = require('../../../Algorithms/Function')

/**
 * Writer monad
 * @constructor
 * @param {function} action
 */
function Writer(action) {
  this.action = action

  this.of = function (result, output) {
    return new Writer(() => [
      result,
      isEmpty(output) || isUndefined(output) ? [] : [output],
    ])
  }

  /**
   * ap function
   * @param {Writer} writer
   * @returns {Writer}
   * @example
   *
   * Writer.of((x) => x ** 2, 'put fn').ap(Writer.of(2, 'put 2'))
   * // => [Writer]
   */
  this.ap = function (writer) {
    return this.bind((transform) => writer.map(transform))
  }

  /**
   * bind function
   * @param {function} transform
   * @returns {Writer}
   * @example
   *
   * writer(2, 'put 2').bind((x) => writer(x ** 2, 'square val'))
   * // => [Writer]
   */
  this.bind = function (transform) {
    return new Writer(() => {
      const [res, out] = this.run()
      const [_res, _out] = transform(res).run()

      return [_res, extend(out, _out)]
    })
  }

  /**
   * map function
   * @param {function} transform
   * @returns {Writer}
   * @example
   *
   * writer(2, 'put 2').map((x) => x ** 3)
   * // => [Writer]
   */
  this.map = function (transform) {
    return new Writer(() => {
      const [res, out] = this.run()

      return [transform(res), out]
    })
  }

  /**
   * run function
   * @returns {*}
   * @example
   *
   * writer('foo', 'put str').run()
   * // => ['foo', ['put str']]
   */
  this.run = function () {
    return this.action()
  }
}

/**
 * of function
 * @param {*} result
 * @param {*} output
 * @returns {Writer}
 * @example
 *
 * Writer.of('foo', 'put foo')
 * // => [Writer]
 */
Writer.of = function (result, output) {
  return new Writer(() => [
    result,
    isEmpty(output) || isUndefined(output) ? [] : [output],
  ])
}

module.exports = Writer
