const getCapitalizedNameAndLength= require('./10');

test('should show the object with capital letter and length names that have more than three letters', () => {
    const expectedResultList = [{
        name: 'JOAO',
        nameSize: 4
    },
    {
        name: 'FLAVIA',
        nameSize: 6
    },
    {
        name: 'FERNANDA',
        nameSize: 8
    }]
    expect(getCapitalizedNameAndLength(['Ana', 'Joao', 'Flavia', 'Fernanda'])).toEqual(expectedResultList);
})