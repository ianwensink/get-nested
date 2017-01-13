get-nested
==============

## Intro

* safely get a nested object with fallback value
* Avoid getting the well known <em>'undefined is not an object'</em> error.
* syntax is optimized for ES6 arrow functions (see examples below)

## Usage
1. Require get-nested module
2. Call getNested and supply:
  * a function that returns the full path of the value you want to retrieve from an object
  * optionally supply a fallback value to be returned when asked value doesn't exist
3. Use value

## Examples
### ES6
```javascript
import getNested from 'get-nested';

const test = {
  foo: {
      bar: 'baz'
  },
  list: [1, 2, 3]
};

const result1 = getNested(() => test.foo.bar); // baz
const result2 = getNested(() => test.undefinedProp.foo); // false

// If you want always be able to map, even without a value.
const list1 = getNested(() => test.list, []).map(item => item * 2); // [2, 4, 6]
const list2 = getNested(() => test.undefinedProp, []).map(item => item * 2); // []
```
### ES5
```javascript
var test = {
  foo: {
      bar: 'baz'
  }
};

var result1 = getNested(function () {
    return test.foo.bar; // test.foo.bar exists
}, 'fail');

var result2 = getNested(function () {
    return test.bar.foo; //test.bar.foo doesn't exist so default value 'fail' is returned
}, 'fail');

console.info('result1:', result1); // result1: baz
console.info('result2:', result2); // result2: fail
```

## Author
Ian Wensink
ianwensink@gmail.com
