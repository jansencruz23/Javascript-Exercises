const palindromes = function (palWord) {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    let cleaned = palWord.replace(regex, '').toLowerCase();
    let word = cleaned[cleaned.length-1];
    for(let i = cleaned.length -2; i >= 0; i--){
        word += cleaned[i].toLowerCase();
    }
    if (word == cleaned)
        return true
    return false;
};

// Do not edit below this line
module.exports = palindromes;