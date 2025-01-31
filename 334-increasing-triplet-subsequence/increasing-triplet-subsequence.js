/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let result = false;
    let n = nums.length;
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        if (nums[i] <= first) { first = nums[i] }
        else if (nums[i] <= second) { second = nums[i] }
        else result = true;
    }

    return result;
};