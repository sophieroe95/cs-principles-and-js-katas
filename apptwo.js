// export let duplicateNumberInSequence = (numberArray) => {
//     const duplicates = [];

//     const sortedArray = numberArray.sort((a, b) => a - b);
//     const firstNumber = sortedArray[0];
//     const lastNumber = sortedArray[sortedArray.length - 1];

//     for (let numIndex = firstNumber; numIndex < lastNumber; numIndex++) {
//         if (sortedArray.indexOf(numIndex) !== sortedArray.lastIndexOf(numIndex)) {
//             duplicates.push(numIndex);
//         }
//     }

//     return duplicates;
// }

export function findDuplicate(numberArray) {
    const matches = [];
    for (const num of numberArray) {
        if (matches.indexOf(num) === -1) { matches.push(num); } else { return num; }
    }
    return "no duplicates";
}