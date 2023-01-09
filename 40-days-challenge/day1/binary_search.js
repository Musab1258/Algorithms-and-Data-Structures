/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

var search = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let mid;
    let current;
    
    while(min <= max) {
        let mid = Math.floor( ( min + max ) / 2 );
        let current = mid;
        if (nums[current] < target) {
            min = mid + 1;
        } else if (nums[current] > target) {
            max = mid - 1;
        } else {
            return current
        }
    }
    return -1;
}
