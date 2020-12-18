"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onlyDigits = void 0;

// 16: How do you check if a string contains only digits?
// export let onlyDigits = (text) => {
//     // tslint:disable-next-line: radix
//     return (parseInt(text).toString() === text);
//     var reg = /^\d+$/;
// };
// export let reverseWithRecursion = (text) => {
//     return (text === "") ? "" : reverseWithRecursion(text.substr(1)) + text.charAt(0);
// };
var onlyDigits = function onlyDigits(text) {
  var reg = /^\d+$/;
  return reg.test(text);
}; // let reg = /^\d+$/;
// console.log(reg.test('012344'))


exports.onlyDigits = onlyDigits;