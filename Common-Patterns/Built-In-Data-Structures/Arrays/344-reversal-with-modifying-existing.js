((s) => {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    // ES6 destructuring assignment
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  console.log(s)
})(['a', 'b', 'c']);
