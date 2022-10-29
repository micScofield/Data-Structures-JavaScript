// throttling
let count = 0;
const getData = () => {
  console.log('Fetching...', ++count);
};

function throttle(fn, d) {
  let flag = true;

  return function () {
    let context = this;
    let args = arguments;

    if (flag) {
      fn.apply(context, args);
      flag = false
      setTimeout(() => {
        flag = true
      }, d);
    }
  };
}

const enhancedGetData = throttle(getData, 300);
