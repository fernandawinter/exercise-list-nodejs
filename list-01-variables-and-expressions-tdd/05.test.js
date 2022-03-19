const getTheFifthPartOfTheNumber = require('./05');

test('the fifth part of number 5 is 1', () => {
    expect(getTheFifthPartOfTheNumber(5)).toBe(1);
});

test('the fifth part of number 4 is 0.8', () => {
    expect(getTheFifthPartOfTheNumber(4)).toBe(0.8);
});