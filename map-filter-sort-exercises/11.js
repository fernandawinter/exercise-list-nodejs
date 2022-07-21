function getMultipliedByFiveEvenNumbers(array) {

    const onlyEvenNumbersMustBeMultipliedByFive = array.filter(number => {
        if (number % 2 === 0) {
            return true;
        }
        
    })

    const multipliedByFiveEvenNumbers = onlyEvenNumbersMustBeMultipliedByFive.map(number => number * 5)

    return multipliedByFiveEvenNumbers;

}
module.exports = getMultipliedByFiveEvenNumbers;