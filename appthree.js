// export function findMultipleDuplicates(numberArray) {
//     const matches = [];
//     const duplicates = [];
//     for (const num of numberArray) {
//         if (matches.indexOf(num) === -1) { matches.push(num); } else { duplicates.push(num); }
//     }
//     return duplicates;
// }

let findMultipleDuplicates = (numberArray) => {
    const matches = [];
    const duplicates = [];
    for (let i = 0; i <= numberArray.length; i++) {
        let currentNumber = numberArray[i]
        if (matches.indexOf(currentNumber) == -1) {
            matches.push(currentNumber);
        } else { duplicates.push(currentNumber); }
    }
    console.log(duplicates)
    return duplicates;
}

findMultipleDuplicates([1, 1, 2, 2, 3, 3]);

// console.log(findMultipleDuplicatesOne[1, 1, 2, 2, 3, 3])
// console.log(findMultipleDuplicates[1, 1, 2, 2, 3, 3])

// export function findMultipleDuplicates(numberArray) {
//     const matches = [];
//     const duplicates = [];

//     const sortedArray = numberArray.sort((a, b) => a - b);
//     const firstNumber = sortedArray[0];
//     const lastNumber = sortedArray[sortedArray.length - 1];

//     for (let numIndex = firstNumber; numIndex < lastNumber; numIndex++) {
//         if (matches.indexOf(numIndex) === -1) { matches.push(numIndex); } else { duplicates.push(numIndex); }
//     }
//     return duplicates;
// }

numArray = [1, 3, 4, 5, 1, 3, 6, 7, 9, 4];
const noDuplicates = [...new Set(numArray)];
console.log(noDuplicates);