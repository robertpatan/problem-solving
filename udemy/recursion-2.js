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

function capitalizeFirst_Teacher (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst_Teacher(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
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

function nestedEvenSum_Teacher (obj, sum=0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object'){
      sum += nestedEvenSum_Teacher(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
      sum += obj[key];
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
  return [arr.shift().toUpperCase()]
    .concat(capitalizeWords(arr.slice(0, arr.length)))
}

function capitalizeWords_Teacher (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords_Teacher(array.slice(0, -1));
  console.log(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());

  return res;

}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords_Teacher(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']




//---------------------------------------------------------------------------------

/**
 * Write a function called&nbsp;<code>stringifyNumbers</code>&nbsp;which takes in an object and finds all of the values
 * which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */

function stringifyNumbers(obj) {
  let result = {};

  for(let prop in obj) {
    let currentProp = obj[prop];
    if(currentProp.constructor === Number) {
      result[prop] = currentProp.toString();
    } else if(currentProp.constructor === Object) {
      result[prop] = stringifyNumbers(currentProp)
    } else {
      result[prop] = currentProp;
    }
  }

  return result;
}

function stringifyNumbers_Teacher(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers_Teacher(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}



let obj = {
    num: 1,
    test: [1,2,3],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// console.log(stringifyNumbers(obj))
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

/**
 * Write a function called&nbsp;<code>collectStrings</code>&nbsp;which accepts an object and
 * returns an array of all the values in the object that have a typeof string
 * */

function collectStrings(obj) {
  let result = [];

  for(let key in obj) {
    let currentProp = obj[key];
    if(typeof currentProp === "string") {
      result.push(currentProp)
    } else if(currentProp.constructor === Object) {
      result = result.concat(collectStrings(currentProp))
    }
  }

  return result;
}

const objCollectStrings = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

// console.log(collectStrings(objCollectStrings)) // ["foo", "bar", "baz"])