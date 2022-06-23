function getSumOfTheFirstFiftyEvenNumbers() {
    let counter = 0;
    let i = 0;
    let sum = 0;

    while (counter <= 50) {
        if (i % 2 === 0) {
            sum += i;
            counter++;
        }
        i++;
    }

    return sum;
}

module.exports = getSumOfTheFirstFiftyEvenNumbers;