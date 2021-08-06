function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    const freq1 = {}
    const freq2 = {}

    for (let i of str1) {
        freq1[i] = ++freq1[i] || 1
    }

    for (let i of str2) {
        freq2[i] = ++freq2[i] || 1
    }

    for (let i of str1) {
        // check if its present in str2
        if (!(i in freq2)) return false

        // check count
        if(freq1[i] !== freq2[i]) return false
    }

    return true
}

console.log(isAnagram('qwerty', 'weqtyr')) // should return true

/*
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
*/