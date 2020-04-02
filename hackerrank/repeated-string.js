function l(...params) {
  console.log(params);
}

function repeatedString(s, n) {
  const target = 'a';
  let matchesOneChunk = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === target) matchesOneChunk++;
  }

  let stringIterationsNeeded = Math.ceil(n / s.length);
  let estMatches = stringIterationsNeeded * matchesOneChunk;

  //generate string chunk
  let maxStringChunk = stringIterationsNeeded * s.length;
  let spliceDiff = maxStringChunk - n;

  let sChunk = s.slice(s.length - spliceDiff)

  let overflowOccurrences = 0;
  for (let i = 0; i < sChunk.length; i++) {
    if (sChunk[i] === target) overflowOccurrences++;
  }

  const result = estMatches - overflowOccurrences;

  return result;
}

let string = 'aba';
const repeats = 10;
//aba aba aba a  => 7

repeatedString(string, repeats);