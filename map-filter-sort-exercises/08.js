function getTheLengthOfNames(array) {
    const lengthNames = array.map(name => name.length)
    return lengthNames;
}

module.exports = getTheLengthOfNames;