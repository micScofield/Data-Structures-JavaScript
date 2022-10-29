/*
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

 

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
*/

var containsNearbyAlmostDuplicate = function(arr, indexDiff, valueDiff) {
    let map = arr.map((val, index) => ({val, index}))
    console.log(map)

    for (let i in arr) {
        
    }
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0)) // true
// console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3)) // false
