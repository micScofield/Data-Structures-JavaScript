let twoSum = function (nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target- nums[i])) {
      return [map.get(target-nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
};

// sorted arrays
/*
var twoSum = function(nums, target) {
  let start = 0
  let end = nums.length- 1
  let temp

  while (start < end) {
      temp = nums[start] + nums[end]
      if (temp === target) return [start, end]

      if (temp < target) start ++
      else end--
  }
};
*/

console.log(twoSum([2,7,11,15], 18)) // [1, 2]

console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 2, 3], 6)); // [0,2]
