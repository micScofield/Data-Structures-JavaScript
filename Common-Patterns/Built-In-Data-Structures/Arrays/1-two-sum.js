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

console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 2, 3], 6)); // [0,2]
