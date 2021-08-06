// Sort map
const map = new Map()
map.set(3, 'sanyam')
map.set(1, 'jindal')
map.set(2, 'ankush')
map.set(5, 'UPI')

var map2 = new Map();
map2.set('3', "foo");
map2.set('1', "bar");
map2.set('2', "baz");

console.log(new Map([...map2.entries()].sort()))
console.log(new Map([...map.entries()].sort()))