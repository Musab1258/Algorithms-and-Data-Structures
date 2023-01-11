/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
   if (k === 0 || k % nums.length === 0) return nums

    k = k % nums.length

    swap(0, nums.length - k - 1)
    swap(nums.length - k, nums.length - 1)
    swap(0, nums.length - 1)

    function swap(i, j){
        while(i < j){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }

    return nums   
};
