function getIdealWeight(height, sex) {

    if(sex == 'male') {
        const maleIdealWeight = 72.7 * height - 58;
        return  parseFloat(maleIdealWeight.toFixed(2));
    } else if(sex == 'female') {
        const femaleIdealWeight = 62.1 * height - 44.7
        return  parseFloat(femaleIdealWeight.toFixed(2));
    } else {
        return 'Those are wrong values';
    }
}
module.exports = getIdealWeight;