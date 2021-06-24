(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.percentage 1/3,2/3,3/3,4/3', function () {
      const res1 = nx.percentage(1, 3);
      const res2 = nx.percentage(2, 3);
      const res3 = nx.percentage(3, 3);
      const res4 = nx.percentage(4, 3);
      expect(res1).toBe('33.33%');
      expect(res2).toBe('66.67%');
      expect(res3).toBe('100%');
      expect(res4).toBe('133.33%');
    });
  });
})();
