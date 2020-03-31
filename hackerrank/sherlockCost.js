function l(...params) {
  console.log(params);
}

// Complete the cost function below.
function cost(B) {
  let result;

  result = sum(B);


  let A = []; // array of arrays:
  let baseP = [];

  for (let i = 0; i < B.length; i++) {
    let p = [];
    for(let j = 1; j <= B[i]; j++) {
      p.push(j);
    }

    baseP.push(p);
  }

  l(baseP)

  return result
}

function heapGenerate(array) {

}

//correct
function sum(A) {
  let sum = 0;
  for (let i = 1; i < A.length; i++) {
    sum += Math.abs(A[i] - A[i - 1]);
  }

  return sum;
}

const B = [2, 3, 4]
cost(B);

