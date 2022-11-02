const obj = { 3: 'User3', 1: 'User1', 2: 'User2', 5: 'User5', 11: 'User4' };

for (let i in obj) {
    let newKey = obj[i]
    obj[obj[i]] = i
    delete obj[i]
}

console.log(obj)