function getMinorAndMajorNumber(array) {
    let minorNumber = 999999;
    let majorNumber = -99999;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > majorNumber) {
            majorNumber = array[i];
        }
        if(array[i] < minorNumber) {
            minorNumber = array[i];
        }
    }
    return {
        minorNumber: minorNumber,
        majorNumber: majorNumber
    }
}
module.exports = getMinorAndMajorNumber;