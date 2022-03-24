const getIdealWeight = require('./10');

test('the height is 1.86 and is a male', () => {
    expect(getIdealWeight(1.86, 'male')).toEqual(77.22);
});

test('the height is 1.65 and is a female', () => {
    expect(getIdealWeight(1.65, 'female')).toEqual(57.77);
});

test('the height is 1.74 and is a boy', () => {
    expect(getIdealWeight(1.74, 'boy')).toEqual('Those are wrong values');
})
