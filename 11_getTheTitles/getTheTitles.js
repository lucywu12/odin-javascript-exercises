const getTheTitles = function(arr) {
    let list = [];
    arr.forEach(book => list.push(book.title));
    return list;

    //alternatively
    //return arr.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
