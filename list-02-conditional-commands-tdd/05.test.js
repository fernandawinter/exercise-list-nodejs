const getAnEvenOrOddNumber = require('./05');

test('the number 7 is integer and is odd', () => {
    expect(getAnEvenOrOddNumber(7)).toBe("odd");
})

test('the number 4 is integer and is even', () => {
    expect(getAnEvenOrOddNumber(7)).toBe("odd");
})