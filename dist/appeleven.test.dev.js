"use strict";

var _appeleven = require("./appeleven.js");

// import { palindromeChecker } from "./appeleven.js";
// describe("How do you reverse the words in a sentence?", () => {
//     it("Reverses basic sentence", () => {
//         expect(palindromeChecker("soos", "soos")).toBeTruthy;
//         expect(palindromeChecker("bab", "bag")).toBeFalsey;
//     });
// });
describe("How do you check if a given string is a palindrome?", function () {
  it("Basic characters", function () {
    expect((0, _appeleven.palindrome)("race car")).toBeTruthy();
    expect((0, _appeleven.palindrome)("not a palindrome")).toBeFalsy();
    expect((0, _appeleven.palindrome)("A man, a plan, a canal. Panama")).toBeTruthy();
    expect((0, _appeleven.palindrome)("nope")).toBeFalsy();
    expect((0, _appeleven.palindrome)("almostomla")).toBeFalsy();
  });
  it("Deal with numbers", function () {
    expect((0, _appeleven.palindrome)("My age is 0, 0 si ega ym.")).toBeTruthy();
    expect((0, _appeleven.palindrome)("1a1")).toBeTruthy();
    expect((0, _appeleven.palindrome)("1 eye for of 1 eye.")).toBeFalsy();
    expect((0, _appeleven.palindrome)("0_0 (: /-\ :) 0–0")).toBeTruthy();
  });
});