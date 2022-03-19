const getTheNumberAndSeeIffItIsPositiveOrNegative = require('./02');

test('the number 4 is positive and its square root is 2', () => {
    expect(getTheNumberAndSeeIffItIsPositiveOrNegative(4)).toBe(2);
});

test('the number -3 is negative and invalid', () => {
    expect(getTheNumberAndSeeIffItIsPositiveOrNegative(-3)).toBe();
});