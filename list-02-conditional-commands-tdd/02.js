function getTheNumberAndSeeIffItIsPositiveOrNegative(num) {
    if (num >= 0) {
        return Math.sqrt(num);
    } else {
        return console.log("the number is invalid");
    }
}
module.exports = getTheNumberAndSeeIffItIsPositiveOrNegative;