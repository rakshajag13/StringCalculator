import add from "../src/calci";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should return the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should return the sum of numbers with new lines", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
  });

  test("should fail for invalid input string", () => {
    expect(add("1,\n")).toBe(0);
  });

  test("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("-1,2")).toThrow("negatives not allowed: -1");
    expect(() => add("//;\n-1;-2")).toThrow("negatives not allowed: -1, -2");
  });

  test("Should ignore numbers greater than 1000", () => {
    expect(add("1001,2")).toBe(2);
    expect(add("//;\n1001;2")).toBe(2);
  });
});
