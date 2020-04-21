/**
 * Multiple pointers
 *
 * Write a function called isSubsequence which takes in two strings and checks whether the characters
 * in the first string form a subsequence of the characters in the second string. In other words, the function should
 * check whether the characters in the first string appear somewhere in the second string, <strong>without their order
 * changing.
 */

function l(...params) {
  console.log(...params);
}


function isSubsequence(target, string) {

  let currCharIndex = 0;

  for(let char of string) {
    if(target[currCharIndex] === char) {
      currCharIndex++;
    }
  }

  return currCharIndex === target.length;
}



// l(isSubsequence('hello', 'hello world'))//true
// l(isSubsequence('sing', 'sting lala ing'))//true
// l(isSubsequence('abc', 'abracadabra'))//true
l(isSubsequence('abc', 'acb'))//false

function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}


//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence3(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
