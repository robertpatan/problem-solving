function l(...params) {
  console.log(...params);
}

function main(values) {
  let lastCheckedIndex = 0;

  if(values.length === 0) return 0;

  for(let j = 1; j < values.length; j++) {
    if(values[lastCheckedIndex] !== values[j] ) {
      lastCheckedIndex += 1;
      values[lastCheckedIndex] = values[j];
    }
  }

  lastCheckedIndex += 1;

  // l(lastCheckedIndex);

  return lastCheckedIndex;
}

const values = []
main(values)