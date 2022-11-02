const obj = { 3: 'User3', 1: 'User1', 2: 'User2', 5: 'User5', 11: 'User4' };
const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

// If keys are strings
console.log(Object.keys(maxSpeed).sort().reduce((acc, cur) => {
    acc[cur] = maxSpeed[cur]
    return acc
}, {}))

// If keys are numbers -> Object.keys be default gives sorted result as it considers them array like objects.
console.log(Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = obj[cur]
    return acc
}, {}))

// by value
console.log(Object.keys(maxSpeed).sort((a, b) => maxSpeed[a] - maxSpeed[b]).reduce((acc, cur) => {
    acc[cur] = maxSpeed[cur]
    return acc
}, {}))