"use strict";

var _appsixteen = require("./appsixteen.js");

test("How do you check if a string contains only digits?", function () {
  expect((0, _appsixteen.onlyDigits)("abc")).toBeFalsy();
  expect((0, _appsixteen.onlyDigits)("abc1")).toBeFalsy();
  expect((0, _appsixteen.onlyDigits)("01234")).toBeTruthy();
});