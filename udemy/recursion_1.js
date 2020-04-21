function l(...params) {
  console.log(...params);
}

/**
 * Write a function called power which accepts a base and an exponent. The function should return the power of the base to
 * the exponent. This function should mimic the functionality of >Math.pow() - do not worry about negative bases and exponents
 */

function power(base, exp) {
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
}

// l(power(2, 5))


/**
 * Write a function factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it; e.g., factorial four 4!)
 * is equal to 24, because 4 *&nbsp;3&nbsp;* 2 * 1 equals 24. factorial zero (0!) is always 1.
 */
function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

// l(factorial(10))

/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 * @param arr
 */
function productOfArray(arr) {
  if(arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

// l(productOfArray([1,2,3]))

/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */
function recursiveRange(n) {
  if(n === 0) return 0;

  return n  + recursiveRange(n-1);
}

// l(recursiveRange(10)) //55
// l(recursiveRange(28)) //317811

/**
 * Write a recursive function called fib which accepts a number and returns the n-th number
 * in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 * which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(nth) {
  if(nth <= 2) return 1;
  return fib(nth - 1) + fib(nth-2);
}


//fib

l(fib(4)) //3

