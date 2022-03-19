const { odd, even } = require("prelude-ls");

function getAnEvenOrOddNumber(num) {

    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}
module.exports = getAnEvenOrOddNumber;