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


export let compareAnagrams = (string, text) => {
    const stringArray = string.toLowerCase().split("").sort().join()
    const textArray = text.toLowerCase().split("").sort().join();

    return stringArray === textArray;
}

// export let areAnagramsOfEachOther = (word1, word2) => {

//     word1 = word1
//         .toLowerCase()
//         .split("")
//         .sort()
//         .join();

//     word2 = word2
//         .toLowerCase()
//         .split("")
//         .sort()
//         .join();

//     return word1 === word2;
// };