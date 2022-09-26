function fib(n) {
  var fib_nums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fib_nums[i] = fib_nums[i - 1] + fib_nums[i - 2];
  }

  return fib[n];
}

console.log(fib(10000));

// here time complexity is O(n) i.e. linear
// space complexity is better than top-down approach