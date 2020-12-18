"use strict";

var _appfourteen = require("./appfourteen.js");

describe("How do you swap two numbers without using a third variable?", function () {
  it("should swap positive numbers successfully", function () {
    expect((0, _appfourteen.swapWithoutThirdVariable)([5, 10])[0]).toBe(10);
    expect((0, _appfourteen.swapWithoutThirdVariable)([5, 10])[1]).toBe(5);
    expect((0, _appfourteen.swapWithoutThirdVariable)([10, 5])[0]).toBe(5);
    expect((0, _appfourteen.swapWithoutThirdVariable)([10, 5])[1]).toBe(10);
    expect((0, _appfourteen.swapWithoutThirdVariable)([15, 110])[0]).toBe(110);
    expect((0, _appfourteen.swapWithoutThirdVariable)([15, 110])[1]).toBe(15);
  });
  it("should swap negative numbers successfully", function () {
    expect((0, _appfourteen.swapWithoutThirdVariable)([-5, -10])[0]).toBe(-10);
    expect((0, _appfourteen.swapWithoutThirdVariable)([-5, -10])[1]).toBe(-5);
  });
});