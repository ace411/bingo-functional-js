# String Helpers

These include functions usable on string values.

## concat

Appends strings onto each other sequentially with a separator in-between adjacent values.

**Since**: 0.1.0

**Arguments**: 

- `wildcard (string)` The string separator to use
- `strings (string)` The strings to concatenate

```js
const merged = concat('-', 'foo', 'bar')
//outputs foo-bar
```

## slugify

Converts a string to a slug.

**Since**: 0.1.0

**Arguments**: 

- `string (string)` The string to convert

```js
const slug = slugify('occaecat amet tempor nostrud lorem qui')
//outputs occaecat-amet-tempor-nostrud-lorem-qui
```

## truncate

Outputs an arbitrary number of characters in a string and appends an ellipsis to the resultant string.

**Since**: 0.1.0

**Arguments**: 

- `string (string)` The string to truncate
- `limit (integer)` The number of characters to include in resultant string

```js
const text = 'Culpa exercitation nostrud dolor est voluptate velit amet qui eiusmod amet et est velit.'

const truncated = truncate(text, 18)
//outputs Culpa exercitation...
```