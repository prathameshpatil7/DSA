/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let res = 0; let cur = 0;
    nums.forEach(num => {
        if (num === 0) {
            cur++;
            res += cur;
        }
        else {
            cur = 0;
        }
    });
    return res;
};