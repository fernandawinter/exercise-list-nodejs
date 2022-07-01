const getMultiplesOfFourList = require('./04');

test('should show the multiple of four numbers', () => {
    expect(getMultiplesOfFourList([0,1,2,3,4,5])).toEqual([0,4,8,12,16,20]);
})