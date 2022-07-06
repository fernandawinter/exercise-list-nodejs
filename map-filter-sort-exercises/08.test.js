const getTheLengthOfNames = require('./08');

test('should show the number of letters in each name of the list', () => {
    expect(getTheLengthOfNames(['Ana', 'Joao', 'Flavia'])).toEqual([3,4,6]);
})