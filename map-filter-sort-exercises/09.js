function getLessThanFourLettersNames(array) {
    const lessThanFourLettersNames = array.filter(name => name.length < 4)
    return lessThanFourLettersNames;
}

const getLessThanFourLettersNames2 = (array) => {
    const lessThanFourLettersNames = array.filter(name => name.length)
    return lessThanFourLettersNames
}

const getLessThanFourLettersNames3 = (array) => {
    return array.filter(name => name.length)
}

const getLessThanFourLettersNames4 = (array) => array.filter(name => name.length)




module.exports = getLessThanFourLettersNames;