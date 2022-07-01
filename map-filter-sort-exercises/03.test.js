const getOddNumbersList = require('./03');

test('should show the odd numbers from the list', () => {
    expect(getOddNumbersList([0,1,2,3,4,5,6,7])).toEqual([1,3,5,7]);
})
