const getTheEvenOrOddIntegerNumber = require('./05');

test('the number 7 is integer and is odd', () => {
    expect(getTheEvenOrOddIntegerNumber(7)).toBe("odd");
})

test('the number 4 is integer and is even', () => {
    expect(getTheEvenOrOddIntegerNumber(4)).toBe("even");
})