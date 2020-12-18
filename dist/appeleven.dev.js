"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.palindrome = void 0;

// let numberArray = [1, 2, 3, 4, 5, 6]
// let number = 6;
// let findPairs = (numberArray, number) => {
//     for (let index = 0; index < array.length; index++) {
//         let a = numberArray[i]
//         let b = numberArray[i + 1]
//         let pairs = []
//         if ((a + b) = number) { pairs.push(a, b) } else { return "no pairs" }
//     }
//     return pairs
// }
// export function reverseWordsInSentence(sentence) {
//     let reverseWords = sentence.split(" ").reverse().join(" ")
//     return reverseWords
// }
// export let palindromeChecker = (word1, word2) => {
//     return word1.toLowerCase().split("").reverse().join() === word2.toLowerCase().split("").reverse().join()
// };
var palindrome = function palindrome(text) {
  var regexPattern = /[^A-Za-z0-9]/g;
  var cleanString = text.toLowerCase().replace(regexPattern, "");
  var reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
};

exports.palindrome = palindrome;