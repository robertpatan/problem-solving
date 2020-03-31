/**
 * @param {string} initial
 * @param {string} goal
 * @return {number}
 */

function minimumConcat(initial, goal) {
  initial = initial.toLowerCase();
  goal = goal.toLowerCase();

  const initialLength = initial.length;
  const goalLength = goal.length;
  const checkInitial = 0 <= initialLength && initialLength <= 100;
  const checkGoal = 0 <= goalLength && goalLength <= 100000;

  if (checkInitial && checkGoal) {
    //sparg goal intr-un array de caractere
    const goalChars = goal.split('');
    const initialChars = initial.split('');

    let indexes = [];
    let subList = [];

    //traverse left to right
    let initialTmp = initial;

    for(let i = 0; i <= initialLength; i++) {
      let needleIndex = goal.indexOf(initialTmp);

      if(needleIndex > -1) {
        subList.push(goal.substring(needleIndex, needleIndex + initialTmp.length))
      }
      initialTmp = initialTmp.substring(i, initialLength - 1);
    }

    //travers right to left
    initialTmp = initial;
    for(let i = initialLength-1; i >= 0; i--) {
      let needleIndex = goal.indexOf(initialTmp);
      console.log(`i: ${i}, initialTmp: ${initialTmp}, initialLength: ${initialLength}, needleIndex: ${needleIndex}`)

      if(needleIndex > -1) {
        console.log('substring:', needleIndex, initialTmp.length -1)
        subList.push(goal.substring(needleIndex, goal.length))
      }
      initialTmp = initialTmp.substring(initialLength-i);

    }

    console.log(subList);

  }

  return -1;
}

var initial = 'abc';
var goal = 'abcbc';
console.log(minimumConcat(initial, goal));