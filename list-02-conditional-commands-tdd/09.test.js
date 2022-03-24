const getLoanGranted = require('./09');

test('the salary is 1000.00 and the loan installment is 210.00', () => {
    expect(getLoanGranted(1000.00, 210.00)).toEqual('Loan not granted');
});

test('the salary is 1000.00 and the loan installment is 200.00', () => {
    expect(getLoanGranted(1000.00, 200.00)).toEqual('Loan granted');
});
