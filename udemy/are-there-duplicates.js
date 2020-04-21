/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in. You can solve this using the
 * frequency counter pattern OR the multiple pointers pattern.
 * @param params
 */

function areThereDuplicatesFrequencyCounter(...params) {
  let occurrences = {};

  for (let param of params) {
    occurrences[param] = typeof occurrences[param] !== "undefined" ? occurrences[param] + 1 : 1;

    l(occurrences[param]);
    if (occurrences[param] > 1) {
      return true;
    }
  }

  //or
  for(let key in params){
    if(occurrences[key] > 1) return true
  }



  return false;
}

// l(areThereDuplicatesFrequencyCounter(1, 2, 2))


function areThereDuplicatesPointers(...params) {
  let min = 0;
  let max = params.length - 1;

  for(let k in params) {
    if(min > max) {
      return false;
    }

    //check if is the same as the next
    if(params[min] === params[min+1]) {
      return true;
    }

    //check if same as max
    if(params[min] === params[max]) {
      return true;
    }

    //check if max same as prev
    if(params[max] === params[max-1]) {
      return true;
    }

    min++;
    max--;

    return false;
  }

  return false;
}

l(areThereDuplicatesPointers(1, 2, 3,4,5,1,6,3,8,9,5))


function l(...params) {
  console.log(...params);
}