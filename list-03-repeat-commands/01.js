function getMultiplesOfThree() {
    const listOfMultiplesOfThree = [];
    let counter = 0;
    let i = 1;

    while (counter < 5) {
        if(i % 3 == 0) {
            listOfMultiplesOfThree.push(i);
            counter++;
        }
        i++;
    } 
    return listOfMultiplesOfThree;
}
module.exports = getMultiplesOfThree;