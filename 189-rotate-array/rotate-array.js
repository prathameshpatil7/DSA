/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
 // Handle cases where k is greater than the length of the array
    k = k % nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);

    return nums; 
    
    function reverse(array, start, end) {
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}


};