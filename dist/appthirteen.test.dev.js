"use strict";

var _appthirteen = require("./appthirteen.js");

describe("How do you check if two strings are a rotation of each other?", function () {
  it("x", function () {
    expect((0, _appthirteen.areRotations)("abcd", "dabc")).toBeTruthy();
    expect((0, _appthirteen.areRotations)("abcd", "dacb")).toBeFalsy();
  });
});