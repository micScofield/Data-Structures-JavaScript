function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      // no need for an equality check as else block takes care of it
      results.push(arr2[j]);
      j++;
    }
  }
  // either i or j has exhausted, push the remainign elements of the other array, only one of below while will run
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Practice
/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3,0,0,0] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

// Do not return anything, modify nums1 in-place instead.

function test(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (right < 0) {
      break;
    }

    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[i] = nums1[left--];
    } else {
      nums1[i] = nums2[right--];
    }
  }
  console.log(nums1)
}

console.log(test([10, 20, 30,0,0,0], 3, [5, 10, 11], 3));
