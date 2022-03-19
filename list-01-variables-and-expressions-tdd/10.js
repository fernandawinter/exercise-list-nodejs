function convertKilometersIntoMeters(kilometers) {
    const meters = (kilometers / 3.6).toFixed(2);
    return parseFloat(meters);
}
module.exports = convertKilometersIntoMeters;
