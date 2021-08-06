var unsorted = {"3":"sanyam","1":"jindal","2":"ankush","5":"UPI","11": "last"}

const sortObj = unsorted => {
  // Strings are passed as integer keys. So, no need to do keys(unsorted).sort() for integer keys or "integers"
  return Object.keys(unsorted).reduce(function (a, b) {
    a[b] = unsorted[b]
    return a
  }, {})
}

console.log(sortObj(unsorted))