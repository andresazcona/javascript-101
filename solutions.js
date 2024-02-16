
function sum(a, b) {
  
  return a + b;
  
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
