function getReverseCountdown() {
    const countdownList = [];
    let i = 10;
    while(i >= 0) {
        countdownList.push(i);
        i--;
    }
    countdownList.push('FIM');
    return countdownList;
    
}
module.exports =  getReverseCountdown;