function isThisLetterAVowel(letter) {
    const vowels = ["a", "e", "i", "o", "u"]
    return vowels.includes(letter)

    // for (const element of vowels) {
    //     if (letter === element) {
    //         return true;
    //     }
    // }
}

function getLengthAndNameWithTheFirstLetterOnly(array) {
    return array.filter(name => {
        const lastLetterOfAName = name.charAt(name.length - 1)
        
        return name.length % 2 === 1 || !isThisLetterAVowel(lastLetterOfAName)
    })
        .map((name) => {
            const firstLetterOfAName = name[0].toLowerCase()
            return {
                length: name.length,
                name: Array(name.length + 1).join(firstLetterOfAName),
            }
        });
}

module.exports = getLengthAndNameWithTheFirstLetterOnly;