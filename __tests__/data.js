const quadEq = (a, b, c) => (-b + Math.pow((Math.pow(b, 2) - 4 * a * c), 1 / 2)) / 2 * a

const argObj = {
    obj: { a: 12, b: 13 },
    txt: 'loki',
    num: 33,
    func: (x) => x / 2
}

const factorial = (x) => x < 2 ? 1 : x * factorial(x - 1)

module.exports = { argObj, quadEq, factorial }