const getGreaterThanNineNumbers = require('./05');

test('should show greater than nine numbers', () => {
    expect(getGreaterThanNineNumbers([3,7,10,12])).toEqual([10,12]);
})