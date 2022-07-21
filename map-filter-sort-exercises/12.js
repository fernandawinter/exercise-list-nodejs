function getMultipliedByThreeEvenNumbers(array) {

    const multipliedByFiveEvenNumbers = array
     .map(number => number * 3)
     .filter(number => number % 2 === 0)

    return multipliedByFiveEvenNumbers;

}
module.exports = getMultipliedByThreeEvenNumbers;