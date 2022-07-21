const getMultipliedByThreeEvenNumbers= require('./12');

test('should show the even numbers multiplied by three', () => {
    expect(getMultipliedByThreeEvenNumbers([2,4,5,7,9])).toEqual([6,12]);
})