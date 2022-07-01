const getNamesList = require('./01b');

test('should show the same names list', () => {
    const expectedNamesList = [{
        id: 1,
        name: 'Ana'
    },
    {
        id: 2,
        name: 'Beatriz'
    },
    {
        id: 3,
        name: 'Lucas'
    },
    {
        id: 4,
        name: 'Fernanda'
    },]
    expect(getNamesList(['Ana', 'Beatriz', 'Lucas', 'Fernanda'])).toEqual(expectedNamesList)
})