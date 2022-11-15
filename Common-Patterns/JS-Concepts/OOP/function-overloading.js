class Fun {
    functionWithOneParam(param) {
        return param
    }

    functionWithTwoParams(p1, p2) {
        return p1 + p2
    }

    fun(...args) {
        if (args.length === 1) {
            let param = args[0]
            return this.functionWithOneParam(param)
        }
    
        if (args.length === 2) {
            let param1 = args[0]
            let param2 = args[1]
            return this.functionWithTwoParams(param1, param2)
        }
    }
}

const obj = new Fun()

console.log(obj.fun('S', 'J'))
console.log(obj.fun('Sanyam'))