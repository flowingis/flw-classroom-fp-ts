import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe.todo("Money Divide", () => {
  describe.todo("Divide", () => {
    test.each([
      [M.ofEuro(2, "€"), M.ofEuro(1, "€"), M.ofEuro(2, "€")],
      [M.ofEuro(10, "€"), M.ofEuro(2, "€"), M.ofEuro(5, "€")],
      [M.ofEuro(20, "€"), M.ofEuro(20, "€"), M.ofEuro(1, "€")],
    ])("should divide correctly", (a, b, expectedResult) => {
      const result = M.Divide.concat(a, b);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });

  describe.todo("DivideAll", () => {
    test.each([
      [
        M.ofEuro(40, "€"),
        M.ofEuro(5, "€"),
        M.ofEuro(2, "€"),
        M.ofEuro(1, "€"),
        M.ofEuro(4, "€"),
      ],
      [M.ofEuro(24, "€"), M.ofEuro(2, "€"), M.ofEuro(3, "€"), M.ofEuro(4, "€")],
      [
        M.ofEuro(50, "€"),
        M.ofEuro(10, "€"),
        M.ofEuro(1, "€"),
        M.ofEuro(5, "€"),
      ],
      [
        M.ofEuro(120, "€"),
        M.ofEuro(60, "€"),
        M.ofEuro(2, "€"),
        M.ofEuro(1, "€"),
      ],
    ])("should divideAll correctly", (...args) => {
      const [expectedResult] = args.splice(-1, 1);
      const [first, ...rest] = args;
      const result = M.DivideAll(first)(rest);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });
});
