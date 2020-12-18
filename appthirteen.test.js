import { areRotations } from "./appthirteen.js";

describe("How do you check if two strings are a rotation of each other?", () => {
    it("x", () => {
        expect(areRotations("abcd", "dabc")).toBeTruthy();
        expect(areRotations("abcd", "dacb")).toBeFalsy();
    });

});