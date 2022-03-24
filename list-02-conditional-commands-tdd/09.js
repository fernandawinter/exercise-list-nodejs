function getLoanGranted(salary, loanInstallment) {
    if(loanInstallment  > (salary * 20/100)) {
        return 'Loan not granted'
    } else {
        return 'Loan granted'
    }
}
module.exports = getLoanGranted;