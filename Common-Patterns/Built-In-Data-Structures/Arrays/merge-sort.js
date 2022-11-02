let arr = [2, 1, 4, 6, 5, 3];

console.log(mergeSort(arr)); // [1,2,3,4,5,6]

//helper
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    res.push(arr2[j])
    j++
  }

  return res
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
