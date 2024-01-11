const leapYears = function(year) {
    let divByFour = year % 4;
    let divByHundred = year % 100;
    let divByFourHundred = year % 400;

    if (divByFour == 0) {
        if (divByHundred == 0) {
            if (divByFourHundred == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
