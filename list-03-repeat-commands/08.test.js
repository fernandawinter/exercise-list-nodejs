const getMinorAndMajorNumber= require('./08');

test('should show the minor and major number that is 1 and 71', () => {
    expect(getMinorAndMajorNumber([6, 3, 5, 6, 11, 2, 22, 71, 34, 55, 42])).toEqual({ minorNumber: 2, 
       majorNumber: 71});
});