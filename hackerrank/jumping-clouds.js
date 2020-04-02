function l(...params) {
  console.log(params);
}

//https://www.hackerrank.com/challenges/jumping-on-the-clouds

function jumpingOnClouds(c) {
  var previousGoodCloudIndex = 0;
  var bestPath = [];

  for (var i = 0; i < c.length; i++) {
    var currentCloudIndex = i;
    var nextCloudIndex = i + 1;

    if (typeof nextCloudIndex === undefined) continue;

    if (c[currentCloudIndex] === 0) {

      // l(i, '-------', )
      // l('previousGoodCloudIndex: ', previousGoodCloudIndex)
      // l('nextCloudIndex: ', nextCloudIndex)

      if (previousGoodCloudIndex === currentCloudIndex) {
        bestPath.push(i);
      } else {
        // l('nextCloudIndex - currentCloudIndex:', nextCloudIndex - currentCloudIndex)
        // l('previousGoodCloudIndex - nextCloudIndex:', nextCloudIndex - previousGoodCloudIndex)
        if (c[nextCloudIndex] === 0 && (nextCloudIndex - currentCloudIndex) === 1 && (nextCloudIndex - previousGoodCloudIndex) <= 2 ) {
          continue;
          // l('skip')
          //skip
        } else if (c[nextCloudIndex] === 0 && (previousGoodCloudIndex - nextCloudIndex) <= 3) {
          bestPath.push(i);
        } else {
          bestPath.push(i);
        }

        previousGoodCloudIndex = i;
      }

    }

    // l('---------------- ')
    // console.log('  ')


  }


  // l(bestPath)

  return bestPath.length - 1;
}


const c = [0, 0, 1, 0, 0, 1, 0];
// const c = [0, 1, 0, 0, 0, 1, 0];
         //0  1  2  3  4  5  6
jumpingOnClouds(c);