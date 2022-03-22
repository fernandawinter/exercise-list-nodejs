function getTheHighestAndTheDifferenceBetweenTwoIntegerNumbers(num1, num2) {
    
    if (num1 > num2) {
        return {
            theHigherOne: num1,
            theDifferenceBetweenThem: parseFloat((num1 - num2).toFixed(1))
        }
    } else {
        return {
            theHigherOne: num2,
            theDifferenceBetweenThem: parseFloat((num1 - num2).toFixed(1))
        }
    }
}
module.exports = getTheHighestAndTheDifferenceBetweenTwoIntegerNumbers;