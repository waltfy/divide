var sum = function (a, b) {
  return a + b;
}

module.exports = {
  ratio: function () {
    var args = [].slice.call(arguments);
    var arr = args.shift();
    var total = 0;
    
    if (args.length === 1) args.push(1 - args[0]);
    if (args.reduce(sum) > 1) return new Error('The sum of the ratios entered should equal to 1.').stack;

    return args.map(function (value, i, a) {
      var start = Math.floor(total * arr.length);
      var end = Math.floor((value + total) * arr.length);
      total += value;
      return arr.slice(start, end);
    });
  }
};