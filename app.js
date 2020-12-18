// const coaches = ["Andy", "Sam", "Bex"];


// const newNames = coaches.filter(n => n.length == 3).map(n => "Coach " + n)
// console.log(newNames);
// O(n + n)

// // 2 array iterators, we are looping over twice 

// const newNamess = [];
// coaches.forEach(coach => {
//     if (coach.length == 3) newNamess.push("Coach " + coach)
// })

// console.log(newNamess)
// O(n)


// let numbers = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let total = array[i]

// }

// console.log((getSum()))

// const array1 = [1, 2, 3, 4, 6];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce(reducer));

// for (let i = 0; i < array.length; i++) {
//     let element = (array.length - 1);

// }
// let a = [-3, 2, 4, 4, 4, 6, 8, 9, 10]

// let count = a[a.length - 1];
// let missing = [];
// for (let i = a[0]; i <= count; i++) {
//     if (a.indexOf(i) == -1) {
//         missing.push(i);
//         let x = (missing.toString())
//     }
//     let x = (missing.toString())
//     return x;
// }



// let count = a[a.length - 1];
// let missing = [];
// for (let i = a[0]; i <= count; i++) {
//     if (a.indexOf(i) == -1) {
//         missing.push(i);
//     }
// }
// return (missing.toString());

//valid 



//invalid

export let missingNumberInSequence = (numberArray) => {
    const matches = [];

    const sortedArray = numberArray.sort((a, b) => a - b);
    const firstNumber = sortedArray[0];
    const lastNumber = sortedArray[sortedArray.length - 1];

    for (let numIndex = firstNumber; numIndex < lastNumber; numIndex++) {
        if (sortedArray.indexOf(numIndex) === -1) {
            matches.push(numIndex);
        }
    }

    return matches;
}