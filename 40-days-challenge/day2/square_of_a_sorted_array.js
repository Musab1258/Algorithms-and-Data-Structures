/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let sortedSquares = function(nums) {
    let squaredNums = []
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        squaredNums.push(nums[i] ** 2);
    }

    result = squaredNums.sort((a, b) => a - b);

    return result;
};
