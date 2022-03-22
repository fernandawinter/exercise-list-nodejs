function getTheHighestNumber(num1, num2) {
    if (num1 > num2) {
        return num1;

    } else if (num1 = num2) {
        return 'Both numbers are the same';
    } else {
        return num2;
    }
}
module.exports = getTheHighestNumber;