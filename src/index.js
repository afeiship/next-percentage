(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { digits: 2 };

  nx.percentage = function (inNum, inTotal, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    if (inNum == inTotal) return '100';
    return ((inNum * 100) / inTotal).toFixed(options.digits);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.percentage;
  }
})();
