const getNamesList = require('./01');

test('should show the same names list', () => {
    expect(getNamesList(['Ana', 'Beatriz', 'Lucas', 'Fernanda'])).toEqual(['ANA', 'BEATRIZ', 'LUCAS', 'FERNANDA'])
})