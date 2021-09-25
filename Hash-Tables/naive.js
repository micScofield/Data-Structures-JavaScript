function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash("pink", 7))
console.log(hash("red", 7))
console.log(hash("blue", 7))
console.log(hash("green", 7))
console.log(hash("black", 7))
console.log(hash("white", 7))
console.log(hash("orangered", 7))