const arr1 = [1, 2, 3];

let result;

Array.prototype.myReduce = function (fn, initialValue) {
  var arr = this;

  if (arr.length === 0) return;

  if (typeof arr[0] === 'number') initialValue = 0;
  else if (typeof arr[0] === 'string') initialValue = '';
  else if (Array.isArray(arr[0])) initialValue = [];
  else initialValue = {};

  let result = initialValue;

  for (var i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
};

result = arr1.reduce((acc, cur) => {
  return acc + cur;
});

result = arr1.myReduce((acc, cur) => {
  return acc + cur;
});

result = 'Sanyam'.split('').myReduce((acc, cur) => {
  return cur + acc;
});

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

result = data.myReduce((acc, cur) => {
  acc[cur.report_id] = [...(acc[cur.report_id] || []), cur];
  return acc;
}, {});

console.log(result);
