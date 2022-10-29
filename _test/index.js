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
        report_id: 100013,
        report_name: '',
        survey_name: 'Survey 2021',
        is_deleted: null,
        survey_id: 'survey_id',
        coach_name: 'username',
        year: '2021',
    },
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

// Approach 1
// let grouped = data.reduce((r, a) => {
//     r[a.report_id] = [...r[a.report_id] || [], a]
//     return r
// }, {})
// console.log(grouped)

// Approach 2
let res = {}
data.forEach(obj => {
    res[obj.report_id] = [...res[obj.report_id] || [], obj]
})
console.log(res)


/*
{
  '100013': [
    {
      report_id: 100013,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100013,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100013,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    }
  ],
  '100021': [
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    },
    {
      report_id: 100021,
      report_name: '',
      survey_name: 'Survey 2021',
      is_deleted: null,
      survey_id: 'survey_id',
      coach_name: 'username',
      year: '2021'
    }
  ]
}
*/


// Is Anagram Test

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    const freq1 = {}
    const freq2 = {}

    for (let i of str1) {
        freq1[i] = ++freq1[i] || 1
    }

    for (let i of str2) {
        freq2[i] = ++freq2[i] || 1
    }

    for (let i of str1) {
        // check if its present in str2
        if (!(i in freq2)) return false

        // check count
        if(freq1[i] !== freq2[i]) return false
    }

    return true
}

console.log(isAnagram('qwerty', 'qeqtyr')) // should return true

// Closure Question - 

function x() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
    console.log("Hi There!");
}

// x();

function isDuplicate(arr) {
  let obj = {}
  for (let i of arr) {
    obj[i] = ++obj[i] || 1
  }

  for (let i in obj) {
    if (obj[i] > 1) return `${i} is duplicate`
  }
}

console.log(isDuplicate(['sanyam', 'jain', 'sanyam']))