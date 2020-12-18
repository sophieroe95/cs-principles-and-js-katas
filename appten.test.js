import { printFirstNonRepeat } from "./appten.js";

// describe("print the first non-repeated character from a string", () => {
//     it("abbc", () => {
//         expect(printFirstNonRepeat("abbc")).toBe("a");
//     });
//     it("afewreociwddwjej", () => {
//         const result = printFirstNonRepeat("abcdefghibjkldddkkk");
//         expect(result).toBe("a");
//     });
// });

// import { printFirstNonRepeat } from "./q10-solution";

describe("How do you check if two strings are anagrams of each other?", () => {
    it("First Character doesn't repeat", () => {
        expect(printFirstNonRepeat("abc")).toBe("a");
        expect(printFirstNonRepeat("bcd")).toBe("b");
    });
    it("First Character repeats", () => {
        expect(printFirstNonRepeat("aabc")).toBe("b");
    });
    it("Mixed position of characters", () => {
        expect(printFirstNonRepeat("abcba")).toBe("c");
    });

});