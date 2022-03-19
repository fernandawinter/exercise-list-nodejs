function getTheNumberAndCalculateItsSquareAndSquareRoot(num) {

    if (num >= 0) {
        return {
            square: num * num,
            squareRoot: parseFloat(Math.sqrt(num).toFixed(2))
        }
    }
}
module.exports = getTheNumberAndCalculateItsSquareAndSquareRoot;