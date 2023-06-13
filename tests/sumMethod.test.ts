const sumMethod = require('../src/sumMethod');



describe('testing index file', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sumMethod.sum(1, 2)).toBe(3);
      });
});