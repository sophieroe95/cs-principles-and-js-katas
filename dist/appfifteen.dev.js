"use strict";

// 15: How do you find all permutations of a string?
// let allPermutations = (text) => {
//     const results = [];
//     if (text.length === 1) {
//         results.push(text);
//         return results;
//     }
//     //a
//     //ab
//     //a b
//     //b a
//     //abc 
//     //a b c
//     //a c b
//     //b a c
//     //b c a
//     //c a b
//     //c b a 
//     text.split("")
//         .forEach((firstChar, index) => {
//             const charsLeft = text.substring(0, index) + text.substring(index + 1);
//             // console.log(charsLeft);
//             allPermutations(charsLeft)
//                 .forEach((permutation) => {
//                     results.push(firstChar + permutation);
//                 });
//         });
//     return results;
// };
// allPermutations('dog');
// console.log(allPermutations('dog'))
// let allVersions = (text) => {
//         if (text.length = 0) return 'empty string';
//         if (text.length = 1) return text;
//         let perms = [];
//         for (let i = 0; i < text.length; i++) {
//             const current = text[i]; //d
//             const remaining = text.slice[0, i] + text.slice[i + 1];
//             //                 og       slices all till end           
//             // console.log(remaining)
//             for (let j = 0; j < remaining.length; j++) {
//                 // console.log(perms)
//                 perms.push(current + allVersions(remaining)[j]);
//             }
//         }
//         return perms;
//     }
//how does this work?
//why aren't my console.logs working?
//no.3, for loop vs for of
// allVersions('dog');
// console.log(allVersions('dog'))
// function getAllPermutationsOfASet(text) {
//     var results = [];
//     if (text.length === 1) {
//         results.push(text);
//         return results;
//     }
//     for (var i = 0; i < text.length; i++) {
//         var first = text[i];
//         var remains = text.substring(0, i) + text.substring(i + 1);
//         // console.log(remains)
//         var innerPermutations = getAllPermutationsOfASet(remains);
//         for (var j = 0; j < innerPermutations.length; j++) {
//             results.push(first + innerPermutations[j]);
//         }
//     }
//     return results;
// }
// console.log(getAllPermutationsOfASet('dog'))
var findNumOfPerms = function findNumOfPerms(text) {
  if (text.length === 0) {
    return "";
  }

  ;

  if (text.length === 1) {
    return text;
  }

  ;
  var perms = [];

  for (var i = 0; i < text.length; i++) {
    var current = text[i];
    console.log('first ' + text.slice(0, i));
    console.log('second ' + text.slice(i + 1));
    var remaining = text.slice(0, i) + text.slice(i + 1);
    console.log(remaining);

    for (var j = 0; j < remaining.length; j++) {
      perms.push(current + findNumOfPerms(remaining)[j]);
    }
  }

  console.log(perms);
  return perms;
};

findNumOfPerms('dog');