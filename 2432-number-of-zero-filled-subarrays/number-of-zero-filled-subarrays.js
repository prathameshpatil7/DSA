/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let result = 0;
    let count = 0;
    const n = nums.length;
    for(let i=0; i< n; i++){
        if(nums[i] === 0){
            count++;
            result+=count;
        } else{
            count = 0;
        }
    }
    return result;
};