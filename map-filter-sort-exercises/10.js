function getCapitalizedNameAndLength(array) {

    const byNameLengthUnderThreeLetters = array.filter(name => name.length > 3)
        .map((name) => {
        return {
            name: name.toUpperCase(),
            nameSize: name.length,
        }
    })

    // const namesAndLettersQuantityList = namesAndLettersQuantityListFilter.map((name) => {
    //     return {
    //         name: name.toUpperCase(),
    //         nameSize: name.length,
    //     }
    // })

    return byNameLengthUnderThreeLetters;
}
module.exports = getCapitalizedNameAndLength;
