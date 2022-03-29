const getReverseCountdown = require('./03');

test('should return the countdown from 10 to 0', () => {
    expect(getReverseCountdown()).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 'FIM']);
})
