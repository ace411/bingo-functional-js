# Collection Helpers

These include functions usable with JSON and arrays.

## map function

The map function transforms each entry in a collection.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The function to map onto collection entries
- `list (object)` The list to transform

```js
const vals = [2, 3, 4, 5]
const squares = map(x => x * x, vals) //outputs [4, 9, 16, 25]
```

## filter function

To filter is to make a selection based on a boolean predicate. The filter function, therefore, makes it possible to select array values based on a filter function's boolean return value.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The function to map onto collection entries
- `list (object)` The list to transform

```js
const vals = [99, 4, 78, 19, 20]
const even = filter(x => x % 2 == 0, vals) //evaluates to [4, 78, 20]
```

## fold function

Also known as the reduce function, the fold function transforms a list into a single value.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The function to map onto collection entries
- `list (object)` The list to transform
- `acc (mixed)` The accumulator value

```js
const vals = [1, 2, 3, 4, 5, 6]
const sum = fold((acc, val) => (val % 2 == 0) ? (acc + val) : acc, vals, 0)
//evaluates to 12
```

**Important**: Map, fold, and filter functions are considered transducers. Eric Elliott's blog series, Composing Software, further explains the concept. I recommend that you, the reader, pay the text - [Transducers: Efficient Data Processing Pipelines in JavaScript](https://medium.com/javascript-scene/transducers-efficient-data-processing-pipelines-in-javascript-7985330fe73d) - heed.

## any function

Checks if a single value in a list conforms to the boolean predicate in a function signature.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The function to map onto collection entries
- `list (object)` The list to evaluate

```js
const res = any(isBoolean, [false, true, 1, 2, 3, 'foo'])
//outputs true
```

## every function

Checks if a boolean assertion in a function holds for every value in a list.

**Since**: 0.1.0

**Arguments**: 

- `function(s) (Function)` The function to map onto collection entries
- `list (object)` The list to evaluate

```js
const res = every(isNumber, [1, 2, 3, 4]) //outputs true
```

## extend function

Concatenates arrays.

**Since**: 0.1.0

**Arguments**: 

- `lists (array)` The lists to concatenate

```js
const list = extend(['foo', 'bar'], [1, 2, 3])
//outputs ['foo', 'bar', 1, 2, 3]
```

## partition function

The partition function one which can be used to create a multidimensional list object expressed as a collection of smaller objects of a defined size.

**Since**: 0.1.0

**Arguments**: 

- `number (integer)` The number of partitions to create
- `list (object)` The list to partition

```js
const frag = partition(2, [1, 2, 3, 4, 5]) //outputs [[1, 2, 3], [4, 5]]
```

## partitionBy function

Works like the `partition` function but accepts, instead of a discretionary number of partitions, an arbitrary maximum number of items per partition.

**Since**: 0.1.0

**Arguments**: 

- `number (integer)` The maximum number of items per partition
- `list (object)` The list to partition

```js
const frag = partitionBy(2, [1, 2, 3, 4, 5]) 
//evaluates to [[1, 2], [3, 4], [5]]
```

## head function

The output of the head function is the first value of a list object.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose first element is to be computed

```js
const first = head({ a: 12, b: 'foo' })
//outputs 12
```

## last function

The output of the head function is the last value of a list object.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose last element is to be computed

```js
const first = head({ a: 12, b: 'foo' })
//outputs foo
```

## tail function

The tail function returns all list values from the second to the last.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose elements other than the first are to be returned

```js
const res = tail({ a: 12, b: 'foo', c: 'bar' })
//outputs { b: 'foo', c: 'bar' }
```

## sizeOf function

Computes the size of a list object.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose size is to be computed

```js
const size = sizeOf({
    a: 'foo',
    b: 'bar',
    c: 'baz',
    d: 'foo-bar'
})
//outputs 4
```

## reverse function

Returns a list object with elements in reverse order.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose order is to be changed

```js
const ret = reverse(['foo', 'bar']) //outputs ['bar', 'foo']
```

## pick function

Selects an item from a list.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list from which an item is to be selected
- `item (mixed)` The value to pick

```js
const odd = [3, 7, 9]

const picked = pick(odd, 7)
```

## pluck function

Select an item from a list by index.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list from which an item is to be selected
- `index (mixed)` The index of the item to pick

```js
const ret = pluck({ foo: 'foo', bar: 'bar' }, 'foo') //outputs foo
```

## keyExists function

Checks if a specified index exists in a list.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list to examine
- `key (mixed)` The key to search for

```js
const odd = { foo: 9, bar: 99 }
const check = keyExists(odd, 'baz') //outputs false
```

## keysExist function

Checks if specified indexes exist in a list.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list to examine
- `key(s) (mixed)` The keys to search for

```js
const odd = { foo: 9, bar: 99 }
const check = keysExist(odd, 'baz', 'foo_bar') //outputs false
```

## toPairs function

Combines key-value pairs into discrete array value pairs.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list to manipulate

```js
const pairs = toPairs({ foo: '_foo', bar: '_bar' })
//outputs [['foo', '_foo'], ['bar', '_bar']]
```

## fromPairs function

The opposite of the `toPairs` function; the fromPairs function forms key-value pairs from discrete array value pairs.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list of discrete array value pairs

```js
const pairs = toPairs([['foo', '_foo'], ['bar', '_bar']])
//outputs { foo: '_foo', bar: '_bar' }
```

## dropLeft function

Removes a specified number of elements from the front of a list object.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list to transform
- `count (integer)` The number of elements to remove

```js
const sliced = dropLeft([1, 2, 'foo', 'bar'], 2)
//outputs ['foo', 'bar']
```

## dropRight function

Removes a specified number of elements from the back of a list object.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list to transform
- `count (integer)` The number of elements to remove

```js
const sliced = dropRight([1, 2, 'foo', 'bar'], 2)
//outputs [1, 2]
```

## max function

Finds the list item with the highest value.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose largest value is to be computed

```js
const ret = max([9, 8, 11, 1]) //outputs 9
```

## min function

Finds the list item with the lowest value.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose lowest value is to be computed

```js
const ret = min([9, 8, 11, 1]) //outputs 1
```

## mean function

Computes the average value of the items in a list.

**Since**: 0.1.0

**Arguments**: 

- `list (object)` The list whose mean value is to be computed

```js
const ret = mean([9, 8, 11, 1]) //outputs 7.25
```
