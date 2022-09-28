// Multiple Pointers - Average Pair

function averagePair(arr, n) {
    let left = 0
    let right = arr.length - 1
    let avg

    while(left <= right) {
        avg = (arr[left] + arr[right]) / 2

        if (avg === n) return true

        avg > n ? right-- : left++
    }
    return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))

// Multiple Pointers - isSubsequence

function isSubsequence(str1, str2) {
    // edge case1
    if (str1.length > str2.length) return false

    let i = 0
    for (let j=0; j<str2.length; j++) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
    }
    return false
}

console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'acb')) // false
console.log(isSubsequence('hello', 'helloworld')) // true

// Sliding Window - Subarray sum

function maxSubArraySum(arr, n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }

    let total = 0
    for (let i=n; i < arr.length; i++) {
        total = sum + arr[i] - arr[i-n]
        sum = Math.max(sum, total)
    }
    return sum
}

console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4)) // should return 39




// Longest Substring Distinct

function longestSubstr(str) {
    if (str.length === 0) return 0

    // store looped chars inside an array
    let seen = []

    let longest = 0

    for (let i = 0; i < str.length; i++) {

        // check if character already exists in the array
        if (seen.includes(str[i])) {
            console.log(str[i], 'exists')

            // find index of that char and splice the array, we have consecutive string lengths stored in the longest variable
            const index = seen.indexOf(str[i])
            console.log('index', index)
            seen.splice(0, index + 1)   
            console.log('Spliced Array', seen)         

            console.log('longest', longest)
        }

        // push looped char inside array
        seen.push(str[i])
        console.log('Current Arr', seen)

        // set longest based on current array's length
        longest = Math.max(longest, seen.length)
    }

    return longest
}

console.log(longestSubstr('thisishowwedoit')) // should return 6

//...Better approach is in another file

function minSubArrLen(arr, sum) {
  let start = 0
  let end = 0
  let total = 0
  let minLength = Infinity
  let subArray

  while (start < arr.length) {
    console.log(start, end)
    if (total === sum) {
      console.log('hurrah !', start,end)
      console.log(arr.slice(start, end+1))
      // minLength = Math.min(minLength, arr.slice(start, end-start+1).length)
      minLength = Math.min(minLength, end-start+1)
      subArray = [arr[start], arr[end]]
    }
    if (total <= sum && end < arr.length) {
      total += arr[end]
      console.log('total: ', total)
      if (end === arr.length-1) {
        end = end
      } else if (total !== sum){
        end++
      } else {
        end = end
      }
      console.log('Current end head: ', end)
    }
    if (total > sum && end < arr.length) {
      start+= 1
      end = start
      total = 0
      console.log('Sum exceeded, new: start: ', start,', end: ', end)
    }
    if (end >= arr.length) break
  }

  return `MinLength: ${minLength!==Infinity ? minLength : 0}, Array: ${subArray}`
}

console.log(minSubArrLen([1,2,3,2,4,3], 7)) // [2,3,2], [4,3] are the sub arrays (consecutive) possible. min should be the answer. so, 2.

//console.log(minSubArrLen([1,4,16,22,5,7,8,9,10], 55))


// Variant to above question, find min length to GREATER THAN OR EQUAL TO provided sum value

// function minSubArrLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
// }

//console.log(minSubArrLen([1,2,3,2,4,3], 7))


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

// Searching Algorithms practice
let username_db = ['sj', 'mic', 'steve']

function isValidUsername(str) {
  // for (let i of username_db) {
  //   if (i === str) return false
  // }
  // return true

  return username_db.indexOf(str) > 0 ? false : true
}

console.log(isValidUsername('steve'))

// String Search

function stringSearch(long, short) {
  let count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(stringSearch('hello world hello', 'hello')) // 2 matches found => return 2
console.log(stringSearch('hello world hello', 'l')) // 5


const removeDuplicates = nums => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i--, 1)
      console.log(nums)
    }
  }
  return nums.length
}

console.log(removeDuplicates([1,2,2,3,4,4]))

// Swap
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
  return arr
}

console.log(swap([1,2,3], 1,2)) // [1,3,2]

var unsorted = {"3":"sanyam","1":"jindal","2":"ankush","5":"UPI","11": "last"}

const sortObj = unsorted => {
  // Strings are passed as integer keys. So, no need to do keys(unsorted).sort() for integer keys or "integers"
  return Object.keys(unsorted).reduce(function (a, b) {
    a[b] = unsorted[b]
    return a
  }, {})
}

console.log(sortObj(unsorted))

// Sort map
const map = new Map()
map.set(3, 'sanyam')
map.set(1, 'jindal')
map.set(2, 'ankush')
map.set(5, 'UPI')

var map2 = new Map();
map2.set('3', "foo");
map2.set('1', "bar");
map2.set('2', "baz");

console.log(map2)
console.log(new Map([...map2.entries()].sort()))
console.log(new Map([...map.entries()].sort()))