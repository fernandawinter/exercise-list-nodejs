const getTheListNumbersPlusTen = require('./07');

test('should show numbers from the list plus ten', () => {
    expect(getTheListNumbersPlusTen([3,5,8,10,11])).toEqual([13,15,18,20,21]);
})