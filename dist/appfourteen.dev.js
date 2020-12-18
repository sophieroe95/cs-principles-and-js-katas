"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapWithoutThirdVariable = void 0;

// 14: How do you swap two numbers without using a third variable?
var swapWithoutThirdVariable = function swapWithoutThirdVariable(varArray) {
  // assuming a = 5 and b = 10;
  var a = varArray[0];
  var b = varArray[1]; // a = a + b; // a now becomes 15
  // b = a - b; // b becomes 10
  // a = a - b; // a becomes 5

  b = a + (a = b) - b;
  return [a, b];
};

exports.swapWithoutThirdVariable = swapWithoutThirdVariable;
;