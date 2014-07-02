var sum = function (a, b) { return a + b; }

// adapted from http://stackoverflow.com/a/3943985
function shuffleString (str) {
  var str = str.split(''),
      n = str.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = str[i];
    str[i] = str[j];
    str[j] = tmp;
  }

  return str.join("");
}

// adapted from Jonas Raoni Soares Silva @ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle (o) { //v1.0
  if (o.constructor === String) { return shuffleString.call(null, o)}
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

module.exports = {
  /**
   * ratio() Splits an Array (or String) with given ratios
   *
   * arr    - An array to be splitted.
   * splits - Comma separated values (floats), their sum must equal `1`.
   *          If only one float is passed in, we append the difference (1 - x) to the `args` array.
   *
   * returns an array with sub-arrays (or the splitted arrays)
   */
  ratio: function (arr /* , splits */) {
    var args = [].slice.call(arguments, 1),
        total = 0;
    
    if (args.length === 1) args.push(1 - args[0]);
    if (args.reduce(sum) > 1) return new Error('The sum of the ratios entered should equal to 1.').stack;

    return args.map(function (value) {
      var start = ~~(total * arr.length);
      var end = ~~((value + total) * arr.length);
      total += value;
      return arr.slice(start, end);
    });
  },
  
  /**
   * random() Shuffles then splits an Array (or String) with given ratios
   *
   * arr    - An array to be splitted.
   * splits - Comma separated values (floats), their sum must equal `1`.
   *          If only one float is passed in, we append the difference (1 - x) to the `args` array.
   *
   * returns an array with sub-arrays (or the splitted arrays)
   */
  random: function (arr /* , splits */) {
    return this.ratio.apply(null, [shuffle(arr)].concat([].slice.call(arguments, 1)));
  }
};