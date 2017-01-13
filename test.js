var getNested = require('./index.js');

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
