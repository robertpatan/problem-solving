/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first
 * letter of each string in the array.
 *
 * @param strArray
 * @returns {string[]|*[]}
 */
function capitalizeFirst(strArray) {
  if (strArray.length === 0) return [];

  let elem = strArray.shift();
  elem = elem.charAt(0).toUpperCase() + elem.slice(1);

  return [elem].concat(
    capitalizeFirst(strArray.slice(0, strArray.length)),
  );
}

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

//---------------------------------------------------------------------------------


/**
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object
 * which may contain nested objects.
 */
function nestedEvenSum(obj) {
  if (typeof obj !== "object") return 0;
  let sum = 0;

  let values = Object.values(obj);

  for (let val of values) {
    if (typeof val === "number" && val % 2 === 0) {
      sum += val;
    } else {
      sum += nestedEvenSum(val);
    }

  }

  return sum;
}


const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
}

const obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'},
};
//
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10


//------------------------------------------------------------------------


/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array containing each word capitalized.
 */
function capitalizeWords (arr) {
  if(arr.length === 0) return [];
  return [arr.shift().toUpperCase()].concat(capitalizeWords(arr.slice(0, arr.length)))
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']




//---------------------------------------------------------------------------------

/**
 * Write a function called&nbsp;<code>stringifyNumbers</code>&nbsp;which takes in an object and finds all of the values
 * which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */

function stringifyNumbers(obj) {

  for(let prop in obj) {
    let currentProp = obj[prop];
    if(typeof currentProp === "number") {
      obj[prop] = currentProp.toString();
    } else if(typeof currentProp === "object") {
      obj[prop] =  stringifyNumbers(currentProp)
    }
  }

  return obj;
}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
/* expected
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/




//---------------------------------------------------------------------------------