const palindromes = function (string) {
    //preprocess
    let lower = string.toLowerCase();
    let replaced = lower.replace(/[!, .]/g, ""); //letters and numbers only

    var letters = replaced.split(''); //make array
    //less than midpoint O(n/2) solution hopefully
    const len = letters.length;
    const mid = len / 2;
    console.log(letters);
    for (let i = 0; i < mid; i++) {
        if (letters[i] != letters[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
