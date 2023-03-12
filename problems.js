//Problem 1. Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
function hasZeroSum(arr) {
    // Create an empty object to store the visited numbers
    const visited = {};
    
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the negative of the current number has already been visited
      if (visited[-arr[i]]) {
        return true;
      }
      // Add the current number to the visited numbers
      visited[arr[i]] = true;
    }
    // If we reach this point, no two numbers sum to 0
    return false;
  }

//example
const arr1 = [1, 2, 3, -2]; // should return true
const arr2 = [0, 2, 3, 4]; // should return false

console.log(hasZeroSum(arr1)); // true
console.log(hasZeroSum(arr2)); // false

//Problem 2. Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function hasUniqueCharacters(word) {
    // Create an empty object to store the visited characters
    const visited = {};
    
    // Loop through the characters in the word
    for (let i = 0; i < word.length; i++) {
      // Check if the current character has already been visited
      if (visited[word[i]]) {
        return false;
      }
      // Add the current character to the visited characters
      visited[word[i]] = true;
    }
    // If we reach this point, all characters are unique
    return true;
  }

  //Example
const word1 = "hello"; // should return false
const word2 = "world"; // should return true

console.log(hasUniqueCharacters(word1)); // false
console.log(hasUniqueCharacters(word2)); // true

//Problem 3. Write a function to check a sentence to see if it is a pangram or not.
function isPangram(sentence) {
    // Create an empty object to store the frequency of each character
    const charFrequency = {};
    
    // Loop through the characters in the sentence
    for (let i = 0; i < sentence.length; i++) {
      // Ignore non-alphabetic characters
      if (!/^[a-zA-Z]+$/.test(sentence[i])) {
        continue;
      }
      // Convert the character to lowercase and add it to the frequency object
      const char = sentence[i].toLowerCase();
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    
    // Check if the frequency object contains all the letters of the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
      if (!charFrequency[alphabet[i]]) {
        return false;
      }
    }
    
    // If we reach this point, the sentence is a pangram
    return true;
  }

//Example:
const sentence1 = "The quick brown fox jumps over the lazy dog."; // should return true
const sentence2 = "This is not a pangram."; // should return false

console.log(isPangram(sentence1)); // true
console.log(isPangram(sentence2)); // false

//Problem 4. Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
function findLongestWord(words) {
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
      
      if (wordLength > maxLength) {
        maxLength = wordLength;
      }
    }
    
    return maxLength;
  }

//Example:
const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(findLongestWord(words)); // 10



