function getBooleansList(array) {

    const booleansList = array.map(boolean => {
        return !boolean;
    })
    
    return booleansList;
}
module.exports = getBooleansList;