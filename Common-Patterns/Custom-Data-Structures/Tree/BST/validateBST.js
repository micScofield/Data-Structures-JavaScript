const { bst, n } = require('./*bst-2');

// bst is valid, n is invalid

(node => {
    console.log(node)
    let temp = node
    let flag = true

    while (temp) {
        if (temp.left?.value > temp.value || temp.right?.value < temp.value) return false
        temp = temp.left ? temp.left : temp.right
    }
    console.log(flag)
})(n)