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


export let findFirstNonDuplicate = (text) => {
    const stringArray = text.split("");
    const uniqueKeyStore = new Map();
    const output = [];

    stringArray.forEach((character) => {
        if (uniqueKeyStore.get(character) && !output.includes(character)) {
            output.push(character);
        } else {
            uniqueKeyStore.set(character, character);
        }
    });

    return output;
};