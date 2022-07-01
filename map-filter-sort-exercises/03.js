// function isOdd(value) {
//     return value % 2 === 1
// }

function getOddNumbersList(array) {

    const oddNumbersList = array.filter(number => {
        if (number % 2 === 1) {
            return true;
        }
    })

    // const oddNumbersList2 = array.filter(number => number % 2 === 1)

    // const oddNumbersList3 = array.filter(number => isOdd(number))

    return oddNumbersList;
}

module.exports = getOddNumbersList;