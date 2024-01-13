const findTheOldest = function(arr) {
    let key = "yearOfDeath";
    const date = new Date();
    const todayYear = date.getFullYear();
    const person = arr.sort((a, b) => {
        let aAge = 0;
        let bAge = 0;
        if (key in a) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = todayYear - a.yearOfBirth;
        }
        if (key in b) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = todayYear - b.yearOfBirth;
        }
        if (aAge > bAge) {
            return -1;
        } else if (aAge < bAge) {
            return 1;
        } else {
            return 0;
        }
    });

    console.table(person);
    return arr[0]; //first should be the oldest
};

// Do not edit below this line
module.exports = findTheOldest;
