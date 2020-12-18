"use strict";

var _apptwelve = require("./apptwelve.js");

describe("How can a given string be reversed using recursion?", function () {
  it("Basic characters", function () {
    expect((0, _apptwelve.reverseWithRecursion)("dog")).toBe("god");
    expect((0, _apptwelve.reverseWithRecursion)("hello")).toBe("olleh");
    expect((0, _apptwelve.reverseWithRecursion)("Howdy")).toBe("ydwoH");
    expect((0, _apptwelve.reverseWithRecursion)("Greetings from Earth")).toBe("htraE morf sgniteerG");
  });
});