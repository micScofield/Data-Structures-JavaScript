/*
1. Create a helper function (mergeTwoSorted) which sorts and merges the two sorted arrays to one. O(n + m)
2. Break up the arrays into halves until size of 0 or 1
*/
function mergeTwoSorted(arr1, arr2) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    console.log(`i: ${i}, j: ${j}`);
    if (arr1[i] < arr2[j]) {
      console.log("pushing ", arr1[i]);
      res.push(arr1[i]);
      if (+i + 1 === arr1.length) {
        for (let n = j; n < arr2.length; n++) {
          console.log("pushing rest together", arr2[n]);
          res.push(arr2[n]);
        }
        break;
      } else i++;
    } else if (arr1[i] > arr2[j]) {
      console.log("pushing ", arr2[j]);
      res.push(arr2[j]);
      if (+j + 1 === arr2.length) {
        for (let n = i; n < arr1.length; n++) {
          console.log("pushing rest together", arr1[n]);
          res.push(arr1[n]);
        }
        break;
      } else j++;
    } else if (arr1[i] === arr2[j]) {
      console.log("pushing ", arr1[i], " and ", arr2[j]);
      res.push(arr1[i]);
      res.push(arr2[j]);
      i++;
      j++;
    }
  }
  return res;
}
// console.log(mergeTwoSorted([10,20,30], [5,7,10,11])) // merge two sorted arrays

// Instructor Solution
/*
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
*/

function merge(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    let left = merge(arr.slice(0, mid));
    let right = merge(arr.slice(mid));
    
    return mergeTwoSorted(left, right)
}

console.log(merge([5, 6, 3, 4, 2, 7]));
