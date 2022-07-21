const getLengthAndNameWithTheFirstLetterOnly = require('./13');

test('should show the length and name with the first letter of the name', () => {
    const actualLengthAndNames = getLengthAndNameWithTheFirstLetterOnly(['Ana', 'Isabela', 'Guilherme', 'Fernanda', 'Lucas']);
    const expectedLengthAndNames = 
        [{ length: 3, name: "aaa" }, { length: 7, name: "iiiiiii" }, { length: 9, name: "ggggggggg" }, { length: 5, name: "lllll" }];

    expect(actualLengthAndNames).toEqual(expectedLengthAndNames);
})