function fib(n, memo = [undefined, 1, 1]) { 
  if (memo[n] !== undefined) return memo[n];

  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// memo = [undefined, 1, 1] are for fib(0), fib(1), fib(2) respectively.
// here time complexity is O(n) i.e. linear
// At some point call stack will also go out of bound if we run in chrome debugger or system may get hang for larger values of n