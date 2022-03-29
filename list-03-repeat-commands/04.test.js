const getIntegerNumbers = require('./04');

test('should return numbers from 0 to 10000, from 1000 to 1000', () => {
    expect(getIntegerNumbers()).toEqual([0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]);
});