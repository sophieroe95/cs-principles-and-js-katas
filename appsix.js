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

export function findPairsWhichSum(numberArray, goal) {
    return [...new Set(numberArray)]
        .filter((currentNumber) => {
            if (goal / 2 > currentNumber) {
                return false;
            }
            if (goal / 2 === currentNumber) {
                return (numberArray.filter((item) => currentNumber === item).length > 1);
            }
            return ((goal - currentNumber) in numberArray);
        })
        .map((item) => [item, goal - item]);
}