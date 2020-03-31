function l(...params) {
  console.log(params);
}


let sockPairs = 9;
let socksByColor = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
  let sockPairs = 0;
  let alreadySearchedValues = [];

  for (let i = 0; i < ar.length; i++) {
    let currentPairCount = 0;

    if (!alreadySearchedValues.includes(ar[i])) {
      for (let j = 0; j < ar.length; j++) {
        if (ar[i] === ar[j]) {
          currentPairCount++;

          if (currentPairCount % 2 === 0) {
            currentPairCount = 0;
            sockPairs++;
          }
        }
      }

      alreadySearchedValues.push(ar[i]);
    }
  }

  l(sockPairs);

  return sockPairs;
}

sockMerchant(sockPairs, socksByColor);