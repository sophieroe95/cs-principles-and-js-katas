import { onlyDigits } from "./appsixteen.js";

test("How do you check if a string contains only digits?", () => {
    expect(onlyDigits("abc")).toBeFalsy();
    expect(onlyDigits("abc1")).toBeFalsy();
    expect(onlyDigits("01234")).toBeTruthy();
});