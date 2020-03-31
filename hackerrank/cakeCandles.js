
// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(candles) {

  let max = parseInt(Math.max(...candles));

  let blownCandles = 0;
  for(let i = 0; i < candles.length; i++) {
    if(parseInt(candles[i]) === max) blownCandles++;

  }

  return blownCandles;
}
let candles = [4, 4, 1, 3]
birthdayCakeCandles(candles);

