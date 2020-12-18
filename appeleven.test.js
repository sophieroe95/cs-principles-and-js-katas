// import { palindromeChecker } from "./appeleven.js";

// describe("How do you reverse the words in a sentence?", () => {
//     it("Reverses basic sentence", () => {
//         expect(palindromeChecker("soos", "soos")).toBeTruthy;
//         expect(palindromeChecker("bab", "bag")).toBeFalsey;
//     });
// });

import { palindrome } from "./appeleven.js";

describe("How do you check if a given string is a palindrome?", () => {
    it("Basic characters", () => {
        expect(palindrome("race car")).toBeTruthy();
        expect(palindrome("not a palindrome")).toBeFalsy();
        expect(palindrome("A man, a plan, a canal. Panama")).toBeTruthy();
        expect(palindrome("nope")).toBeFalsy();
        expect(palindrome("almostomla")).toBeFalsy();
    });

    it("Deal with numbers", () => {
        expect(palindrome("My age is 0, 0 si ega ym.")).toBeTruthy();
        expect(palindrome("1a1")).toBeTruthy();
        expect(palindrome("1 eye for of 1 eye.")).toBeFalsy();
        expect(palindrome("0_0 (: /-\ :) 0–0")).toBeTruthy();
    });

});