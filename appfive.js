// function bubbleSort(numberArray) {


//     let counter = 1;
//     let totalCount = 0;
//     result = []
//     while (counter > 0) {
//         counter = 0;
//         for (let i = 0; i < numberArray.length - 1; i++) {
//             totalCount++;
//             const num1 = numberArray[i];
//             const num2 = numberArray[i + 1];
//             if (num1 + num2 > 0) {
//                 array[i] = num2;
//                 array[i + 1] = num1;
//                 counter++;
//             } else {
//                 continue
//             }
//         }
//     }
//     result.push(numberArray[0])
//     result.push(numberArray[numberArray.length - 1])
//     console.log(result)
//     return result

// }

export function findLargestAndSmallest(numberArray) {

    const sortedArray = numberArray.sort((a, b) => a - b);
    return {
        largest: sortedArray[sortedArray.length - 1],
        smallest: sortedArray[0],
    };
}