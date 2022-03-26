const getNumbersFromOneToOneHundred = require('./02');

test('should return numbers from 1 to 10', () => {
    expect(getNumbersFromOneToOneHundred()).toEqual({
        listOfNumbersFor: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        listOfNumbersWhile: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        listOfNumbersDoWhile: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });
})

