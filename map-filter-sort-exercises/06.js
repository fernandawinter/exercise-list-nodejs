function getMultiplesOfFiveNumbers(array) {

    const multiplesOfFiveList = array.filter(number => number % 5 === 0)
    return multiplesOfFiveList;
}

module.exports = getMultiplesOfFiveNumbers;