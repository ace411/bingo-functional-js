# Function Helpers

These include higher-order functions to aid in composing software written in JavaScript as well as object type check functions.

## Composing functions

The ability to combine functions is a concept borrowed from mathematics. Composition, the aforedescribed facility, is applying a function to the output of another function thereby transforming it. A function `f(x)` and another function `g(x)` can be 'composed' to create a function `f o g`.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The functions to chain 

```js
const chain = compose(x => x + 1, x => x * 2)

chain(1) //outputs 4
```

## Partial Application

Partial application is a Functional Programming technique whose promise is enabling one to, supply an arbitrary number of arguments to a function incrementally.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The function to which arguments are to be partially applied
- `argument(s) (mixed)` The function's arguments 

```js
const res = partial((x, y, z) => x + y + z, 1)

res(3, 4) //outputs 8
```

The partial application facility expounded on above is an abstraction of an operation whose order is left-to-right. The concept can as well proceed with a reverse order - right-to-left. To perform the said converse operation, use the `partialRight` function.

```js
const res = partialRight((x, y, z) => (x + y) / z, 5)

res(10, 20) //outputs 6
```

## Currying

Like partial application, currying is a technique whose goal is incremental binding of function arguments to a function. With currying, arguments are bound one-by-one until the yielding of a result.

**Since**: 0.1.0

**Arguments**: 

- `function (Function)` The function to curry

```js
const curry = ((first, last) => concat(' ', 'Hello, ', first, last))

const ret = curry('Michael')

ret('Lochemem') //evaluates to Hello, Michael Lochemem
```

If you intend to incrementally bind only a specific number of elements, consider the `curryN` function.

**Since**: 0.1.0

**Arguments**: 

- `argCount (int)` The number of arguments to curry
- `function (Function)` The function to curry

```js
const curryN = (2, (x, y, z = 3) => x + y + z)
const ret = curryN(2)

ret(9) //evaluates to 14
```

## Identity

The identity function returns the value it receives with no transformations whatsoever.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` An arbitrary value

```js
const val = identity('foo') //prints foo
```

## Constant function

The constant function is one that always returns the first argument it receives.

**Since**: 0.1.0

**Arguments**: 

- `value(s) (mixed)` Arbitrary value(s)

```js
const res = constantFunction('foo', x => x / 2)

res() //outputs foo
```

## Memoize function

Sometimes, a computation might be expensive. Memoization ensures that the output of a computed result is cached and conveyed.

**Since**: 0.1.0

**Arguments**: 

- `function (Function)` The function to memoize

```js
const factorial = x => x < 2 ? 1 : (factorial(x - 1) * x)
const res = memoize(factorial)

res(4)//outputs 24
```

## toException function

Exceptions are impure and are impediments to function chaining. The `toException` function catches an exception and outputs the Exception message component.

**Since**: 0.1.0

**Arguments**: 

- `function (Function)` The function a possible result of which is an Exception

```js
const res = toException(x => {
    if (x.length < 3) {
        throw `${x} is too short`
    }

    return x + "-bar"
})

res('ab') //outputs ab is too short
```

## flip function

The flip function reverses the order of a function's arguments.

**Since**: 0.1.0

**Arguments**: 

- `function (Function)` The function whose argument order is to be changed
- `args (mixed)` The function's arguments

```js
const divide = flip((x, y) => x / y)
const ret = divide(3, 6) //evaluates to 2
```

## isFunction function

Checks if an object is a function.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isFunction(2) //outputs false
```

## isEmpty function

Checks if an object is empty.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isEmpty('') //outputs true
```

## isUndefined function

Checks if an object has a value of `undefined`.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isUndefined('foo') //outputs false
```

## isNull function

Checks if an object has a value of `null`.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isNull({}) //outputs false
```

## isBoolean function

Checks if an object has a boolean value.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isBoolean([]) //outputs false
```

## isNumber function

Checks if an object has a numerical value.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isNumber({}) //outputs false
```

## isNumeric function

Checks if a string object has a numeric value.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isNumeric('abc') //outputs false
```

## isException function

Checks if an object is an `Exception`.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isException('abc') //outputs false
```

## isRegExp function

Checks if an object is a Regular Expression.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isRegExp([]) //outputs false
```

## isString function

Checks if an object is a string.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isString(/[a-z]+/) //outputs false
```

## isSymbol function 

Checks if an object is a Symbol.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const sym = Symbol('foo')
const check = isSymbol(sym) //outputs true
```

## isJsonObject function

Checks if an object is JSON.

**Since**: 0.1.0

**Arguments**: 

- `value (mixed)` The object to evaluate

```js
const check = isJsonObject('abc') //outputs false
```