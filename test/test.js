var t = require('tap').test;
var d = require('../');

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = 'abcde12345';

t('ratio with numbers', function (t) {

  t.deepEqual(
    d.ratio(numbers, 0.1),
    [[0], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    'ratio(numbers, 0.1)'
  );

  t.deepEqual(
    d.ratio(numbers, 0.2),
    [[0, 1], [2, 3, 4, 5, 6, 7, 8, 9]],
    'ratio(numbers, 0.2)'
  );

  t.deepEqual(
    d.ratio(numbers, 0.5),
    [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]],
    'ratio(numbers, 0.5)'
  );

  t.deepEqual(
    d.ratio(numbers, 0.5, 0.3, 0.2),
    [[0, 1, 2, 3, 4], [5, 6, 7], [8, 9]],
    'ratio(numbers, 0.5, 0.3, 0.2)'
  );

  t.end();
});

t('ratio with a string', function (t) {

  t.deepEqual(
    d.ratio(str, 0.1),
    ['a', 'bcde12345'],
    'ratio(str, 0.1)'
  );

  t.deepEqual(
    d.ratio(str, 0.2),
    ['ab', 'cde12345'],
    'ratio(str, 0.2)'
  );

  t.deepEqual(
    d.ratio(str, 0.5),
    ['abcde', '12345'],
    'ratio(str, 0.5)'
  );

  t.deepEqual(
    d.ratio(str, 0.5, 0.3, 0.2),
    ['abcde', '123', '45'],
    'ratio(str, 0.5, 0.3, 0.2)'
  );

  t.end();

});