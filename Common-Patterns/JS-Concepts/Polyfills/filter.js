const data = [
  {
    report_id: 100013,
    report_name: '',
    survey_name: 'Survey 2021',
    is_deleted: null,
    survey_id: 'survey_id',
    coach_name: 'username',
    year: '2021',
  },
  {
    report_id: 100021,
    report_name: '',
    survey_name: 'Survey 2021',
    is_deleted: null,
    survey_id: 'survey_id',
    coach_name: 'username',
    year: '2021',
  },
  {
    report_id: 100021,
    report_name: '',
    survey_name: 'Survey 2021',
    is_deleted: null,
    survey_id: 'survey_id',
    coach_name: 'username',
    year: '2021',
  },
];

let result;

result = data.filter((el) => el.report_id === 100021);

const myFilter = function (fn, thisArg) {
  var arr = thisArg || this;
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    res = fn(arr[i], i, arr);
    if (res) output.push(arr[i]);
  }
  return output;
};

Object.defineProperty(Array.prototype, 'myFilter', {
    value: myFilter,
  });

result = data.myFilter((el) => el.report_id === 100021, data);

console.log(result);
