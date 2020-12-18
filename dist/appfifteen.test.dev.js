"use strict";

var _appfifteen = require("./appfifteen.js");

// 15: How do you find all permutations of a string?
describe("How do you find all permutations of a string?", function () {
  it("should cope with 2 characters", function () {
    expect((0, _appfifteen.allPermutations)("ab")).toContain("ab");
    expect((0, _appfifteen.allPermutations)("ab")).toContain("ba");
    expect((0, _appfifteen.allPermutations)("ab").length).toBe(2);
  });
  it("should cope with 3 characters", function () {
    expect((0, _appfifteen.allPermutations)("abc")).toContain("abc");
    expect((0, _appfifteen.allPermutations)("abc")).toContain("acb");
    expect((0, _appfifteen.allPermutations)("abc")).toContain("bac");
    expect((0, _appfifteen.allPermutations)("abc")).toContain("bca");
    expect((0, _appfifteen.allPermutations)("abc")).toContain("cab");
    expect((0, _appfifteen.allPermutations)("abc")).toContain("cba");
    expect((0, _appfifteen.allPermutations)("abc").length).toBe(6);
  });
});