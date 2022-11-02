// Swap
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

console.log(swap([1, 2, 3], 1, 2)); // [1,3,2]
