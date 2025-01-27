/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = {};
    const n = nums.length;
    const result = []
    for(let i=0; i< n; i++){
        let complement = target - nums[i] ;
        if(hashMap.hasOwnProperty(complement)){
            return [hashMap[complement], i];
        }
        hashMap[nums[i]]= i;
    }
};