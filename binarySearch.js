function l(...params) {
  console.log(params);
}


function search(arr, needle, min, max, steps = 0) {
  let middleIndex = Math.round((min + max) / 2);

  if (steps > 20) return;

  // l(`middleIndex: ${middleIndex}, middleVal: ${arr[middleIndex]}, steps: ${steps}`)
  steps++;
  if (arr[middleIndex] === needle) {
    return `found: ${arr[middleIndex]}, in ${steps} steps`;
  } else if (needle < arr[middleIndex]) {
    max = middleIndex - 1;
    return search(arr, needle, min, max, steps);

  } else if (arr[middleIndex] < needle) {
    min = middleIndex + 1;
    return search(arr, needle, min, max, steps);
  }

  return 'number not found'
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let searchVal = 11;

let result = search(sortedArray, searchVal, 0, sortedArray.length - 1);

l(result);

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;


  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var resultV2 = doSearch(primes, 71);
l("Found prime at index " + resultV2);

//Program.assertEqual(doSearch(primes, 73), 20);