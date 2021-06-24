(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { digits: 2, suffix: '%' };

  nx.percentage = function (inNum, inTotal, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    if (inNum == inTotal) return 100 + options.suffix;
    return ((inNum * 100) / inTotal).toFixed(options.digits) + options.suffix;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.percentage;
  }
})();
