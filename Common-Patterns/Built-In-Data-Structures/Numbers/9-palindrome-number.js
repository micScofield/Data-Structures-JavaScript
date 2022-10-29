// is palindrome
var isPalindrome = function (x) {
  let arr = x.toString().split("");

  let rev = [...arr].reverse();

  return parseInt(arr.join("")) * Math.sign(x) ===
    parseInt(rev.join("")) * Math.sign(x)
    ? true
    : false;
};

// console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)); // false
