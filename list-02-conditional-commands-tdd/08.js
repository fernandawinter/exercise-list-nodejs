function isGradeValid(grade) {
    if (grade >= 0.0 && grade <= 10.0) {
        return true;
    } else {
        return false;
    }
}

function getAverage(grade1, grade2) {
    if (isGradeValid(grade1) && isGradeValid(grade2)) {
        return (grade1 + grade2) / 2;
    } else {
        return 'The grade is not valid';
    }
}
module.exports = getAverage;
