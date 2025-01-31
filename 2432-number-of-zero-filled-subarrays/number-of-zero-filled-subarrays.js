/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let result = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
            continue;
        }

        result += (count * (count + 1)) / 2;
        count = 0;
    }

    result += (count * (count + 1)) / 2;

    return result;
};