function getTheAverageFromPositiveNumbers(array) {
    let sum = 0;
    let count = 0;

    if (array.length == 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i];
            count++;
        }
    }

    const average = sum / count;
    return average;
}

// function getTheAverageFromPositiveNumbers2(array) {
//     const arrayWithPositiveOnly = array.filter(number => number >= 0)

//     let sum = 0;
//     for (let i = 0; i < arrayWithPositiveOnly.length; i++) {
//         sum += arrayWithPositiveOnly[i];
//     }
//     const average = sum / arrayWithPositiveOnly.length
//     return average
// }

// const genders = ['boy', 'boy', 'girl']
// const boys = genders.filter(gender => gender === 'boy') 

// const people = [
//     {name: "Lucas", age: 27}, 
//     {name: "Fernanda", age: 26}, 
//     {name: "Jorge", age: 34}
// ]
// const peopleLowerThan30 = people.filter(person => person.age < 30) 

module.exports = getTheAverageFromPositiveNumbers;