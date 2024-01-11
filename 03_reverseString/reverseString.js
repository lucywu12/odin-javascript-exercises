const reverseString = function(text) {
    let s = '';
    for (let i = text.length - 1; i >= 0; i--) {
        s += text[i]; //append
    }
    return s;
};

// Do not edit below this line
module.exports = reverseString;
