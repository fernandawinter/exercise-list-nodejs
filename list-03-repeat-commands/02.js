function getNumbersFromOneToOneHundred() {
    const listOfNumbersFor = [];
    const listOfNumbersWhile = [];
    const listOfNumbersDoWhile = [];
    let i, j = 1, k = 1;


    for (i = 1; i <= 10; i++) {
        listOfNumbersFor.push(i)
    }

    while (j <= 10) {
        listOfNumbersWhile.push(j)
        j++
    }

    do {
        listOfNumbersDoWhile.push(k)
        k++
    } while (k <= 10)

    return {
        listOfNumbersFor: listOfNumbersFor,
        listOfNumbersWhile: listOfNumbersWhile,
        listOfNumbersDoWhile: listOfNumbersDoWhile
    }
}
module.exports = getNumbersFromOneToOneHundred;