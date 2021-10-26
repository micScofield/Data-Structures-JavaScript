function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  
  // Time complexity of O(2ˆn) // well to be precise O(1.6ˆn)
  // At some point call stack will also go out of bound if we run in chrome debugger or system may get hang for larger values of n