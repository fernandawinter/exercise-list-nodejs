function getNamesList(array) {

    const namesList = array.map((name, index) => {
        return {
            id: index + 1,
            name,
        }
    })

    return namesList;
}
module.exports = getNamesList;



