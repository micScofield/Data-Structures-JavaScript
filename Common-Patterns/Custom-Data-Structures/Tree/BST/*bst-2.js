class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.data === null) {
        this.data = data
        return 
    }

    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

const bst = new Node();
bst.insert(10);
bst.insert(0);
bst.insert(12);
bst.insert(-1);
bst.insert(4);

const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

module.exports = { bst, n }
