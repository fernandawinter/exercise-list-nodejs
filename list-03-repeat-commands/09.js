function getFirstOddNaturalNumbers(n) {
    const listOfFirstOddNaturalNumbers = [];
    let counter = 0;
    let i = 1;

    while (counter < n) {
        if (i % 2 === 1) {
            listOfFirstOddNaturalNumbers.push(i);
            counter++;
        }
        i++;
    }

    return listOfFirstOddNaturalNumbers;
}

module.exports = getFirstOddNaturalNumbers;