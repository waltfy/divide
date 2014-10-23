divide
======

[![Build Status](https://travis-ci.org/waltervascarvalho/divide.svg?branch=master)](https://travis-ci.org/waltervascarvalho/divide) [![NPM version](https://badge.fury.io/js/divide.svg)](https://www.npmjs.org/package/divide) [![Gitter](https://badges.gitter.im/divide.svg)](https://gitter.im/waltfy/divide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Divides an array into 2 or more arrays given a list of ratios as floats, without modifying the original array.—e.g. If you want to split a list into 2 equal lists `divide.ratio([1, 2, 3, 4], 0.5);`.

## Example Usage

### ratio()

```javascript
var d = require('divide');
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = "abcde12345";

/* d.ratio() - Splits an Array (or String) with given ratios */
d.ratio(num, 0.1); // [ [0], [1, 2, 3, 4, 5, 6, 7, 8, 9]  ]
d.ratio(num, 0.2); // [ [0, 1], [2, 3, 4, 5, 6, 7, 8, 9] ]
d.ratio(num, 0.5); // [ [0, 1, 2, 3, 4], [5, 6, 7, 8, 9] ]
d.ratio(num, 0.5, 0.3, 0.2); // [ [0, 1, 2, 3, 4], [5, 6, 7], [8, 9] ]
d.ratio(str, 0.5); // [ ['abcde', '12345'] ]
```

### random()

```javascript
var d = require('divide');
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = "abcde12345";

/* d.random() - Shuffles then splits an Array (or String) with given ratios */
d.random(num, 0.5); // [ [ 1, 2, 9, 0, 6 ], [ 5, 8, 4, 3, 7 ] ]
d.random(str, 0.5); // [ [ 'bd4c1', 'a523e' ] ]
```
