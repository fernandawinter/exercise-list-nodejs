const getAverage = require('./08');

test('the first grade is 4.0 and the second one is 9.0', () => {
    expect(getAverage(4.0, 9.0)).toEqual(6.5);
});

test('the first grade is 12.0 and the second one is 7.0', () => {
    expect(getAverage(12.0, 7.0)).toEqual('The grade is not valid');
});