class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key)

        if (!this.keyMap[index]) {
            this.keyMap[index] = [[key, value]]
        } else {
            // check if key already exists
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) return false
            }
            this.keyMap[index].push([key, value])
        }

        return index
    }

    get(key) {
        let index = this._hash(key)
        if (!this.keyMap[index]) return undefined
        if (this.keyMap[index].length === 1) return this.keyMap[index][0][1]

        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]
        }

        return undefined
    }

    getTable() {
        return this.keyMap
    }
}

let ht = new HashTable(17)
console.log(ht.set("maroon","#800000"))
console.log(ht.set("yellow","#FFFF00"))
console.log(ht.set("olive","#808000"))
console.log(ht.set("salmon","#FA8072"))
console.log(ht.set("lightcoral","#F08080"))
console.log(ht.set("mediumvioletred","#C71585"))
console.log(ht.set("plum","#DDA0DD"))
console.log(ht.set("plum","#DDA0DD"))

console.log(ht.get("yellow"))
console.log(ht.get("maroon"))

console.log(ht.getTable())