const f = require('../index')

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

const factorial = x => x < 2 ? 1 : x * factorial(x - 1)

const fibonacci = x => x < 2 ? x : (fibonacci(x - 1) + fibonacci(x - 2))

const minit = {
    io: f.IO('foo'),
    reader: f.reader(x => f.concat(' ', 'hello', x)),
    state: f.gets(x => f.identity(x)),
    writer: f.tell('add 2')
}

module.exports = { 
    argObj, 
    quadEq, 
    factorial, 
    fibonacci,
    strArr, 
    strObj, 
    numArr, 
    numObj,
    minit 
}