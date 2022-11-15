class Fun {
    #capitalise(name) {
        return name[0].toUpperCase() + name.substr(1)
    }

    getName(name) {
        return this.#capitalise(name)
    }
}

const obj = new Fun()

console.log(obj.getName('s'))