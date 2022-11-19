function deepEquals(value1, value2) {
  if (value1 === value2) return true;

  const typeOfValue1 = typeof value1;
  const typeOfValue2 = typeof value2;

  if (typeOfValue1 !== typeOfValue2) return false;

  // Primitives
  if (typeOfValue1 !== 'object' && typeOfValue2 !== 'object') {
    return value1 === value2;
  }

  // Null
  if (value1 === null && value2 === null) return false;

  // Non primitives
  // Arrays
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) return false;
    return value1.every((el, index) => {
      return deepEquals(el, value2[index]);
    });
  }

  // if still any value is an array, we want to return false. Case: [], {}
  if (Array.isArray(value1) || Array.isArray(value2)) return false;

  // Objects
  const value1keys = Object.keys(value1);
  const value2keys = Object.keys(value2);

  if (value1keys.length !== value2keys.length) return false;

  //
  /*
    Below check is for these two cases - 
    1. Keys should be same too otherwise this case will fail - {a: undefined}, {b: 1}
    2. Order of keys should be same else [a, b] fails [b, a]
  */
  //   if (!deepEquals(value1keys, value2keys)) return false;
  for (let i in value1keys) {
    if (!value2keys.includes(value1keys[i])) {
      return false;
    }
  }

  for (let i in value1keys) {
    if (!deepEquals(value1[i], value2[i])) return false;
  }

  return true;
}

// True cases
console.log(deepEquals(1, 1));
console.log(deepEquals('A', 'A'));
console.log(deepEquals(false, false));
console.log(deepEquals(undefined, undefined));
console.log(deepEquals(null, null));
console.log(deepEquals([], []));
console.log(deepEquals([1, 2], [1, 2]));
console.log(deepEquals([1, [2, [3]]], [1, [2, [3]]]));
console.log(deepEquals({ a: 1, b: 2 }, { b: 2, a: 1 }));
// False cases
console.log('FALSE CASES');
console.log(deepEquals(1, 2));
console.log(deepEquals('A', 'AA'));
console.log(deepEquals(false, true));
console.log(deepEquals(null, undefined));
console.log(deepEquals([], {}));
console.log(deepEquals([1, 2, 3], [1, 3, 2]));
console.log(deepEquals([1, [2, [3]]], [1, [2, [4]]]));
console.log(deepEquals([1, [2, { a: undefined }]], [1, [2, { b: 1 }]]));
