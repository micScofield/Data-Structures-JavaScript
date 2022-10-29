const { bst, n } = require('./*bst-2');

function validate(node) {
  let temp = node;

  function helper(root, min = null, max = null) {
    if (max !== null && root.data > max) {
      return false;
    }

    if (min !== null && root.data < min) {
      return false;
    }

    if (root.left && !helper(root.left, min, root.data)) {
      return false;
    }

    if (root.right && !helper(root.right, root.right.data, max)) {
      return false;
    }

    return true
  }

  return helper(temp);
}

console.log(validate(n)); // false
console.log(validate(bst)); // true
