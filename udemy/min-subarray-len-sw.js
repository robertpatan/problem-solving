/**
 * Write a function called <b>minSubArrayLen</b> which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a <b>contiguous</b> subarray of which the sum is greater than or
 * equal to the integer passed to the function. If there isn't one, return 0 instead.<br>Examples
 *
 * @param arr
 * @param num
 */

function minSubarraySum(arr, num){ //O(n)

  let currLength = 0;
  let tmpSum = 0;

  for(let n of arr) {
    if(tmpSum >= num) break;
    tmpSum += n;
    currLength++;
  }

  console.log(currLength, tmpSum);


}

console.log(minSubarraySum([2,3,1,2,4,3],7))