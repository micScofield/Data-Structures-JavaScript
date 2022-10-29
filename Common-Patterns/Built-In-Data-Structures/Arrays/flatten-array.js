function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }
  
  const arr = [1, 2, [3, 4, [5, 6]]];
  console.log(flatten(arr));