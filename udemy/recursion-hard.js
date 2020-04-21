/**
 * Function which accepts a string  and returns a new string in reverse
 */
function reverse(string) {
  const sLength = string.length - 1;
  if (sLength < 0) return '';
  return string.slice(sLength) + reverse(string.slice(0, sLength));
}

function reverseUdemy(str){
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('awesome') )// 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


/**
 *Write a recursive function called <strong>isPalindrome</strong> which returns true if the string passed to it is a
 * palindrome (reads the same forward and backward). Otherwise it returns false.
 */
function isPalindrome(string) {
  const sLength = string.length;
  if (sLength === 0) return false;
  if (sLength === 1) return true;

  let firstChar = string[0];
  let lastChar = string[sLength - 1];


  //check first with last
  if (firstChar === lastChar) {
    //if is equal, remove first and last
    // recall with new substring
    return isPalindrome(string.slice(1, sLength - 1))
  }

  return false;
}

function isPalindromeUdemy(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback) {
  const size = arr.length - 1;
  if (size === 0) return callback(arr[size]);

  if (callback(arr[size])) {
    return true;
  } else {
    return someRecursive(arr.slice(0, size), callback);
  }
}
function someRecursiveUdemy(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// someRecursive([4,6,8,9], isOdd) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// someRecursive([4,6,8], val => val > 10); // false

/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */
function flatten(arr) {
  let result = [];
  if (arr.constructor !== Array) return arr;

  if (arr.length > 0) {
    for (let val of arr) {
      result = result.concat(flatten(val));
    }
  }

  return result;
}

function flattenUdemy(oldArr){
  var newArr = []
  for(var i = 0; i < oldArr.length; i++){
    if(Array.isArray(oldArr[i])){
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3






