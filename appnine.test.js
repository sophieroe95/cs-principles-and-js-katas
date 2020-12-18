// describe("How do you reverse the words in a sentence?", () => {
//     it("Reverses basic sentence", () => {
//         const reverseWords = reverseWordsInSentence('bees in the tree');
//         expect(reverseWords).toBe('tree the in bees');
//     });
//     it("Reverses basic sentence", () => {
//         const reverseWords = reverseWordsInSentence("");
//         expect(reverseWords).toBe('');
//     });
//     it("Reverses basic sentence", () => {
//         const reverseWords = reverseWordsInSentence("barn");
//         expect(reverseWords).toBe('barn');
//     });

// });
// import { findAnagrams } from "./appnine.js";


// describe("How do you find anagram characters from a string?", () => {
//     it("abbc", () => {
//         expect(findAnagrams("abbc", "cbba")).toBeTruthy;
//     });
// });

import { compareAnagrams } from "./appnine.js";

describe("How do you check if two strings are anagrams of each other?", () => {
    it("Dog", () => {
        expect(compareAnagrams("dog", "god")).toBeTruthy();
        expect(compareAnagrams("dog", "cat")).toBeFalsy();
    });
    it("Doggy", () => {
        expect(compareAnagrams("doggy", "gogdy")).toBeTruthy();
    });
    it("Listen", () => {
        expect(compareAnagrams("listen", "silent")).toBeTruthy();
        expect(compareAnagrams("listen", "silentt")).toBeFalsy();
    });
    it("Listen", () => {
        expect(compareAnagrams("Listen", "silent")).toBeTruthy();
        expect(compareAnagrams("Listen", "listen")).toBeTruthy();
    });
});