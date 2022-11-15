let arr = [1, 2, 3];

let arr2 = arr.map((e) => e * 2);

Array.prototype.customMap = function (cb) {
  var arr = this;
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    // run callback for each element and push inside array
    result.push(cb(arr[i]));
  }

  return result;
};

function cb(n) {
  return n * 2;
}

console.log(arr.customMap(cb));
