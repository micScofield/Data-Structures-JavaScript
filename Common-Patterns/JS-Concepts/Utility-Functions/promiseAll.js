const p4 = Promise.reject('ERROR');
const p5 = Promise.resolve('A');
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ASYNC'), 2000);
});

// Promise.all([p4, p5, p6]).then(console.log).catch(console.log);

function promiseAll(arr) {
  let output = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    for (let i in arr) {
      Promise.resolve(arr[i])
        .then((res) => {
          output[i] = res; // making sure, result is stored at same index as promises were passed in
          counter++;

          if (counter === arr.length) resolve(output);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

promiseAll([p4, p5, p6])
  .then((res) => console.log({ res }))
  .catch((err) => console.log({ err }));
