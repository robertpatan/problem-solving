function l(...params) {
  console.log(...params);
}


function sameFrequency(n1, n2) {
  //convert numbers to string
  n1 = n1.toString();
  n2 = n2.toString();

  //short circuit if arrays are not the same length
  if(n1.length !== n2.length) return false;


  let occurrences = {};
  //iterate one of the number arrays
  for(let char of n1) {
    //if is undefined instantiate and set to 0 else increment by 1
    occurrences[char] = (occurrences[char] || 0) + 1;
  }

  //iterate the second numbers array

  for(let char of n2) {
    //compare if the occurrences match the
    if(!occurrences[char]) {
      return false;
    }

    if(occurrences[char] > 0 ) {
      occurrences[char] -= 1;
    }
  }

  return true;

}


l(sameFrequency(182, 281))