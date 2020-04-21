/** Sliding window
 *
 * Write a function called <b>findLongestSubstring, </b>which accepts a string and returns the length of the longest
 * substring with all distinct characters
 *
 * @param string
 */
function findLongestSubstring(string) { //O(n)

  if (string.length < 1) return 0;

  let maxLength = 0;
  let start = 0;
  let end = 1;
  let currentWindow = '';

  for (let i = 0; i < string.length; i++) {
    let nextChar = string[i + 1];

    currentWindow = string.slice(start, end);
    //check if the next char exists in the current window
    let indexOfNext = currentWindow.indexOf(nextChar);

    maxLength = (maxLength < currentWindow.length) ? currentWindow.length : maxLength;

    if(indexOfNext > -1) { //if the char exists
      start += indexOfNext + 1;
    }

    end++;

    // console.log(`start: ${start} , end: ${end}  | indexOf: ${indexOfNext + 1} | window: ${currentWindow} | length: ${currentWindow.length}`);
  }

  return maxLength;
}


// console.log(findLongestSubstring('thisisawesome')) //6
// console.log(findLongestSubstring('rithmschool')) //7
// console.log(findLongestSubstring('bbbbbb')) //1
// console.log(findLongestSubstring('longestsubstring')) //8
// console.log(findLongestSubstring('thisishowwedoit')) //6

function findLongestSubstring2(str) {//udemy solution
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  console.log(seen);
  return longest;
}

console.log(findLongestSubstring2('thisisawesome')) //6