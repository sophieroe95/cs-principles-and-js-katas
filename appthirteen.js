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

// const reverseWithRecursion = (str) => {
//     return str ? reverseString(str.substr(1)) + str[0] : str;
// };

// export let reverseWithRecursion = (text) => {
//     return (text === "") ? "" : reverseWithRecursion(text.substr(1)) + text.charAt(0);
// };

export let areRotations = (text1, text2) => {
    if (text1.length != text2.length) { return false; }
    const extendedText = text1 + text1;
    return (extendedText.indexOf(text2) !== -1) ? true : false;
};