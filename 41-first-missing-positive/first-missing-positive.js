/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let missingPositive = 1;
    nums.forEach(num=>{
        if(num > 0){
            if(num === missingPositive){
                missingPositive++;
            }
        }
    });
    return missingPositive;
};