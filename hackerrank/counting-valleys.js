function l(...params) {
  console.log(params);
}

//https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

function countingValleys(n, s) {

  let seaLevel = 0;
  let stepUp = 'U';
  let valleysTraversed = 0;
  // let stepDown = 'D';

  let lastMaxDepth = 0;
  let currentDepth = 0;

  for(let i = 0; i< s.length; i++) {
    let currentStep = s[i];

    if(currentStep === stepUp) {
      currentDepth++;
    } else {//step down
      currentDepth--;
    }

    if(lastMaxDepth < seaLevel && currentDepth >= seaLevel) {
      valleysTraversed++;
      lastMaxDepth = 0;
    }

    if(currentDepth < lastMaxDepth) {
      lastMaxDepth = currentDepth;
    }

    // l('currentDepth: ' + currentDepth);
    // l('lastMaxDepth: ' + lastMaxDepth);
  }

  return valleysTraversed;

  // l(valleysTraversed);
}

const n = 8;
const s = ['D','D','U','U','U','D','D'];

countingValleys(n, s);