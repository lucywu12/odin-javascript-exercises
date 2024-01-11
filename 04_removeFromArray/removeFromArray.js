const removeFromArray = function(array, ...args) {
    const arr = [];

    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
