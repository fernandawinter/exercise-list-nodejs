function getGreaterThanNineNumbers(array) {

    const greaterThanNineNumbers = array.filter(number => {
        if (number > 9) {
            return true;
        }
    })

    // const greaterThanNineNumbers = array.filter(number => number > 9)

    return greaterThanNineNumbers;
}

module.exports = getGreaterThanNineNumbers;