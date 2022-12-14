/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        let curr = mid;

        if (target > nums[curr]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;    
};
