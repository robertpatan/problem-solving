function l(...params) {
  console.log(...params);
}

function main(string1, string2) { // O(3n), 3 loopuri, rezulta O(n)

  if (string1.length !== string2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of string1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1; //undefined e evaluat ca fals si intra pe 0 unde se poate face adunarea
  }

  for (let char of string2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }

    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }

  }

  return true;
}

function main2(string1, string2) { // O(2n)
  if (string1.length !== string2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < string1.length; i++) {
    const char = string1[i];
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }

  l(lookup)

  for (let i = 0; i < string2.length; i++) {
    const char = string2[i];

    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;


}

l(main('texttiwsttime', 'timetwisttext'));
l(main2('texttiwsttime', 'timetwisttext'));