function getTheRealSquareOrTheSquareRoot(num) {

    if(num >= 0) {
        return Math.sqrt(num);
    } else {
        return num * num;
    }
}
module.exports = getTheRealSquareOrTheSquareRoot;