class Node {
    constructor(data)   {
        this.data = data
        this.children = []
    }
    
    add(value) {
        this.children.push(new Node(value))
    }
    
    remove(value) {
        this.children = this.children.filter(node => node.data !== value)
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // for every node in the tree, execute fn(node)
    bfs(fn) {
        let visited = [this.root]

        let processed = null

        while(visited.length !== 0) {
            processed = visited.shift()

            fn(processed)

            visited.push(...processed.children)
        }

        // Appraoch 2 (Which I thought first)
        /*
                let visited = [this.root]

        let processed = null
        let standBy = []
        let temp = null

        while(visited.length !== 0) {
            processed = visited.shift()

            fn(processed)

            standBy.push(...processed.children)
            while (standBy.length !== 0) {
                console.log('Should be here only twice')
                temp = standBy.shift()
                fn(temp)
                visited.push(...temp.children)
            }
        }
        */
    }

    dfs(fn) {
        let visited = [this.root]

        let processed = null

        while(visited.length !== 0) {
            processed = visited.shift()

            fn(processed)

            visited.unshift(...processed.children) // instead of processing the children at end, we need to process them first
        }
    }
}

const t3 = new Tree();
const n3 = new Node(20);
    t3.root = n3
    t3.root.add(0);
    t3.root.add(40);
    t3.root.add(-15);
    t3.root.children[0].add(12)
    t3.root.children[0].add(-2)
    t3.root.children[0].add(1)
    t3.root.children[2].add(-2)

// t3.bfs(n => console.log(n.data)) // 20 0 40 -15 12 -2 1 -2
// t3.dfs(n => console.log(n.data)) // 20 0 12 -2 1 40 -15 -2

const t4 = new Tree();
const n4 = new Node(0);
    t4.root = n4
    t4.root.add(1);
    t4.root.add(2);
    t4.root.add(3);
    t4.root.children[0].add(4)
    t4.root.children[2].add(5)
module.exports = { Tree, Node, t3, t4 }