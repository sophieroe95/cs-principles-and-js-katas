"use strict";

var _appeight = require("./appeight.js");

describe("How do you print duplicate characters from a string?", function () {
  it("abbc", function () {
    expect((0, _appeight.findDuplicates)("abbc")[0]).toBe("b");
  });
  it("afewreociwddwjej", function () {
    var result = (0, _appeight.findDuplicates)("abcdefghibjkldddkkk");
    expect(result.length).toBe(3);
    expect(result[0]).toBe("b");
    expect(result[1]).toBe("d");
    expect(result[2]).toBe("k");
  });
});