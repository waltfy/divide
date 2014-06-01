divide
======

[![Build Status](https://travis-ci.org/waltervascarvalho/divide.svg?branch=master)](https://travis-ci.org/waltervascarvalho/divide)

Divides an array into 2 or more arrays given a ratio.

### Usage

```javascript
var d = require('divide');
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = "abcde12345";

d.ratio(arr, 0.1); // [[0], [1, 2, 3, 4, 5, 6, 7, 8, 9]]

d.ratio(arr, 0.2); // [[0, 1], [2, 3, 4, 5, 6, 7, 8, 9]]

d.ratio(arr, 0.5); // [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]

d.ratio(arr, 0.5, 0.3, 0.2); // [[0, 1, 2, 3, 4], [5, 6, 7], [8, 9]]

d.ratio(str, 0.5); // ['abcde', '12345']

```
