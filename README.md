get-nested
==============

## Intro

* safely get a nested object with fallback value

## Usage
1. Require get-nested module
2. Call getNested and supply:
  * a function that returns the full path of the value you want to retrieve from an object
  * optionally supply a fallback value to be returned when asked value doesn't exist
3. Use value

## Sample
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

console.info('result1:', result1);
console.info('result2:', result2);
```

## Author
Ian Wensink
ianwensink@gmail.com
