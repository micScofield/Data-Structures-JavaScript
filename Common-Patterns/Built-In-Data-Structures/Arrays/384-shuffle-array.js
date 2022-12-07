/*
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
 

Example 1:

Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
*/

class Solution {
  constructor(nums) {
    this.nums = nums;
  }
  reset() {
    return this.nums;
  }
  shuffle() {
    let arr = [...this.nums];
    let currentIndex = arr.length - 1;
    let randomIndex;

    while (currentIndex !== -1) {
        // pick a random index to swap current index with
      randomIndex = Math.floor(Math.random() * arr.length);

      // swap
      [arr[randomIndex], arr[currentIndex]] = [
        arr[currentIndex],
        arr[randomIndex],
      ];

      currentIndex--;
    }

    return arr;
  }
}

let solution = new Solution([1, 2, 3]);
console.log(solution.shuffle()); // for example: [3,1,2]
console.log(solution.reset()); // [1,2,3]
console.log(solution.shuffle()); // for example: [2,1,3]
