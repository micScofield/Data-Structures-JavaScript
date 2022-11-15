let arr = new Array(2);

for (let i = 0; i < arr.length; i++) {
  arr[i] = []
}
let h = 0;

let s = 'Sanyam Jain';

console.log(arr);

let data = s.split(' ')
for (let i in arr) {
    arr[i] = [data[i]]
}
console.log(arr);
