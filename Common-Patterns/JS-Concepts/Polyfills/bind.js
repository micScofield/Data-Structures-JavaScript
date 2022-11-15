const user = {
  firstname: 'Sanyam',
  lastname: 'Jain',
};

const printUser = function (param1, param2) {
  console.log(`${this.firstname} ${this.lastname} from ${param1}, ${param2}`);
};

// printUser.call(user, 'city', 'state');
// printUser.apply(user, ['city', 'state']);
const fn = printUser.bind(user, 'city');
fn('state');

Function.prototype.myBind = function (...params) {
  var fn = this;
  var obj = params[0];
  var additionalParams = params.slice(1);
  return (...params2) => {
    fn.apply(obj, [...additionalParams, ...params2]);
  };
};

const fn2 = printUser.myBind(user, 'city');
fn2('state');

// Recommended one
Object.defineProperty(Function.prototype, 'myBind', {
  value: function (...params) {
    var fn = this;
    var obj = params[0];
    var additionalParams = params.slice(1);
    return (...params2) => {
      fn.apply(obj, [...additionalParams, ...params2]);
    };
  },
});

const fn3 = printUser.myBind(user, 'city');
fn3('state');
