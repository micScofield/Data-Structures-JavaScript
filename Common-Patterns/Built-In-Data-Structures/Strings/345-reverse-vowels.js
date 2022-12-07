// Naive
function reverseVowels(str) {
  let map = {};

  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i in str) {
    if (vowels.includes(str[i])) {
      map[i] = str[i];
    }
  }

  const reversedVowels = Object.values(map);
  const keys = Object.keys(map);
  let res = str;

  function replaceAt(str, index, replacement) {
    return (
      str.substring(0, +index) +
      replacement +
      str.substring(+index + replacement.length)
    );
  }

  for (let i in keys) {
    res = replaceAt(res, keys[i], reversedVowels.pop());
  }

  return res;
}

// Advanced
function reverseVowels(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  const VOWELS = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

  while (left < right) {
    if (VOWELS[arr[left]] && VOWELS[arr[right]]) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (VOWELS[arr[left]]) {
      right--;
    } else left++;
  }

  return arr.join("");
}

console.log(reverseVowels("Hello")); //Holle
console.log(reverseVowels("JAin")); //Jian
