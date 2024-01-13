const fibonacci = function(target) {
    //make series and store in array
    let nums = [1, 1];

    if (target < 0) {
        return "OOPS"; //no negatives!
    } else if (target == 0) {
        return 0;
    } else if (target < 3) {
        return 1;
    } else {
        for (let i = 2; i < target; i++) {
            nums.push(nums[i - 1] + nums[i - 2]);
        }
        return nums[target - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
