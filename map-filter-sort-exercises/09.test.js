const getLessThanFourLettersNames= require('./09');

test('should show the names that have less than four letters', () => {
    expect(getLessThanFourLettersNames(['Ana', 'Joao', 'Flavia'])).toEqual(['Ana']);
})