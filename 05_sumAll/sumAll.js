const sumAll = function(num1, num2) {
    if ((typeof num1 != "number") || (typeof num2 != "number")) {
        return "ERROR";
    }

    if ((num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }

    // Swap in case the first is bigger than second
    if (num1 > num2) {
        tmp = num1;
        num1 = num2;
        num2 = tmp;
    }

    let sum = 0;
    for (let i = num1; i < num2 + 1; i++) {
        sum += i;
    }
    return sum;
 };

// Do not edit below this line
module.exports = sumAll;
