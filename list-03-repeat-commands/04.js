function getIntegerNumbers() {
    const integerNumbersList = [];
    let i = 0;

    while (i <= 10000) {
        integerNumbersList.push(i);
        i = i + 1000;
    }
    return integerNumbersList;
}
module.exports = getIntegerNumbers;