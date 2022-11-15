const nums = [2,3,-4, 20]
console.log(new Float64Array([...nums]).sort()) // sorts but the type is not array, instead it is Float64Array
console.log(nums.sort((a, b) => a-b))