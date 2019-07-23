const quadEq = (a, b, c) => (-b + Math.pow((Math.pow(b, 2) - 4 * a * c), 1 / 2)) / 2 * a

const argObj = {
    obj: { a: 12, b: 13 },
    txt: 'loki',
    num: 33,
    func: (x) => x / 2
}

const strArr = ['foo', 'bar']

const strObj = { a: 'foo', b: 'bar' }

const numArr = [1, 2, 3, 4]

const numObj = { a: 12, b: 13, c: 99 }

const factorial = (x) => x < 2 ? 1 : x * factorial(x - 1)

module.exports = { 
    argObj, 
    quadEq, 
    factorial, 
    strArr, 
    strObj, 
    numArr, 
    numObj 
}