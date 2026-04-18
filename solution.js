// 1. Reverse a String
function reverseString(s) {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result = result + s[i];
  }
  return result;
}

// 2. FizzBuzz
function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let value = "";

    if (i % 3 === 0) value += "Fizz";
    if (i % 5 === 0) value += "Buzz";

    if (value === "") value = i.toString();

    result.push(value);
  }

  return result;
}

// 3. Find Largest Number
function findLargest(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

// 4. Check Palindrome
function isPalindrome(s) {
  let clean = "";

  // remove non-alphanumeric
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    ) {
      clean += char.toLowerCase();
    }
  }

  // reverse manually
  let reversed = "";
  for (let i = clean.length - 1; i >= 0; i--) {
    reversed += clean[i];
  }

  return clean === reversed;
}

// 5. Sum of Array
function sumArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

// 6. Count Vowels
function countVowels(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();

    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  return count;
}

// 7. Factorial
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

// 8. Even Numbers
function getEvenNumbers(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }

  return result;
}

// 9. Fibonacci
function fibonacci(n) {
  let result = [];

  if (n >= 1) result.push(0);
  if (n >= 2) result.push(1);

  for (let i = 2; i < n; i++) {
    let next = result[i - 1] + result[i - 2];
    result.push(next);
  }

  return result;
}

// 10. Remove Duplicates
function removeDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (nums[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(nums[i]);
    }
  }

  return result;
}

