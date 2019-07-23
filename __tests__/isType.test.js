const F = require('../index')
const { argObj } = require('./data')

test('isFunction checks if value is function', () => {
    func = F.isFunction(argObj.func)
    nonFunc = F.isFunction(argObj.txt)

    expect(func).toEqual(true)
    expect(nonFunc).toBeFalsy()
})

test('isUndefined checks if value is undefined', () => {
    let val
    undef = F.isUndefined(val)
    isdef = F.isUndefined(argObj.txt)

    expect(isdef).toBeFalsy()
    expect(undef).toEqual(true)
})

test('isBoolean checks if value is boolean', () => {
    const isBool = F.isBoolean(true)
    const notBool = F.isBoolean({})

    expect(isBool).toEqual(true)
    expect(notBool).toBeFalsy()
})

test('isEmpty checks if value is empty', () => {
    const empty = F.isEmpty({})
    const alsoEmpty = F.isEmpty('')
    const notEmpty = F.isEmpty(null)

    expect(empty).toEqual(true)
    expect(alsoEmpty).toEqual(true)
    expect(notEmpty).toBeFalsy()
})

test('isNull checks if value is null', () => {
    const isNull = F.isNull(null)
    const notNull = F.isNull(1)

    expect(isNull).toEqual(true)
    expect(notNull).toBeFalsy()
})

test('isNumber checks if value is a number', () => {
    const isNum = F.isNumber(1)
    const alsoNum = F.isNumber(1.23)
    const notNum = F.isNumber('foo')

    expect(isNum).toEqual(true)
    expect(alsoNum).toEqual(true)
    expect(notNum).toBeFalsy()
})

test('isRegExp checks if value is regular expression object', () => {
    const isRegex = F.isRegExp(/\s+/)
    const notRegex = F.isRegExp('_')

    expect(isRegex).toEqual(true)
    expect(notRegex).toBeFalsy()
})

test('isString checks if value is string', () => {
    const isStr = F.isString('foo-bar')
    const notStr = F.isString(13)

    expect(isStr).toEqual(true)
    expect(notStr).toBeFalsy()
})

test('isSymbol checks if value is symbol', () => {
    const isSym = F.isSymbol(Symbol('foo'))
    const notSym = F.isSymbol('a')

    expect(isSym).toEqual(true)
    expect(notSym).toBeFalsy()
})

test('isJsonObject checks if value is JSON', () => {
    class A {}
    const isJson = F.isJsonObject({})
    const notJson = F.isJsonObject(A)

    expect(isJson).toEqual(true)
    expect(notJson).toBeFalsy()
})