function getNamesList(array) {

    const namesList = array.map(name => {
        return name.toUpperCase();
    })

    return namesList;
}
module.exports = getNamesList;