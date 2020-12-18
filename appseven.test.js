// import { reverseWordsInSentence } from "./appseven.js";

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

import { reverseWordsInSentence } from "./appseven.js";

describe("How do you reverse the words in a sentence?", () => {
    it("Reverses basic sentence", () => {
        expect(reverseWordsInSentence("The dog is big")).toBe("big is dog The");
        expect(reverseWordsInSentence("I am a dog")).toBe("dog a am I");
    });
});