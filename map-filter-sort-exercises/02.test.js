const getBooleansList = require('./02');

test('should show the booleans list with the inverse result', () => {
    expect(getBooleansList([true, false, true])).toEqual([false, true, false]);
})