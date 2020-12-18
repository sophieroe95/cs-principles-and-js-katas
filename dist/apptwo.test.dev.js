"use strict";

var _apptwo = require("./apptwo.js");

describe("How do you find the duplicate number on a given integer array?", function () {
  it("Should return undefined if there are no duplicates", function () {
    expect((0, _apptwo.findDuplicate)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe("no duplicates");
  });
  it("Should return duplicate when in sequence", function () {
    expect((0, _apptwo.findDuplicate)([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10])).toBe(6);
    expect((0, _apptwo.findDuplicate)([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10])).toBe(9);
  });
  it("Should return duplicate when out of sequence", function () {
    expect((0, _apptwo.findDuplicate)([1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
    expect((0, _apptwo.findDuplicate)([1, 2, 9, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(9);
  });
});