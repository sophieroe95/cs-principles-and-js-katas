const array = [3, 6, 2, 10, 1, 23, 45, 2, 17, 8, 14, 33, 19, 22];
// let sorted = [];
// let sortedb = [];
// let sortedc = [];
// let sorted2 = []
// let sorted2b = []
// let sorted3 = []
// let sorted3b = []
//valid
//it('should display 1,2,2,3,6,8,10)

//it(should have length of 14)

//invalid
//('should not be out of order)

//null 
//(should not have length of zero)

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const elementb = array[i + 1];
//     if (element > elementb) {
//         array[i] = elementb
//         array[i + 1] = element
//     }
//     // else(element - elementb < 0) sortedc.push(element);
// };

// for (let i = 0; i < sorted.length; i++) {
//     const element2 = sorted[i];
//     const element2b = sorted[i + 1];
//     // if (element2 > element2b) sorted2.push(element2);
//     // if (element2 < element2b) sorted2b.push(element2);
//     // else(element - elementb < 0) sortedc.push(element);
// };

// for (let i = 0; i < sortedb.length; i++) {
//     const element3 = sortedb[i];
//     const element3b = sortedb[i + 1];
//     if (element3 > element3b) sorted3.push(element3);
//     if (element3 < element3b) sorted3b.push(element3);
//     // else(element - elementb < 0) sortedc.push(element);
// };

// // array.forEach(element => {
// //     if (element > element[i - 1]) i + 1
// // });

// console.log(array)
// console.log(array)
// console.log(sortedb)
// console.log(sorted2)
// console.log(sorted2b)
// console.log(sorted3)
// console.log(sorted3b)

// let counter = 1;
// let totalCount = 0;
// while (counter > 0) {
//     counter = 0;
//     for (let i = 0; i < array.length - 1; i++) {
//         totalCount++;
//         const num1 = array[i];
//         const num2 = array[i + 1];
//         if (num1 + num2 > 0) {
//             array[i] = num2;
//             array[i + 1] = num1;
//             counter++;
//         } else {
//             continue
//         }
//     }
// }

// console.log(totalCount);
// console.log(array);