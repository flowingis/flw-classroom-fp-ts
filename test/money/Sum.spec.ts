import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe("Money Sum", () => {
  describe("Sum", () => {
    test.each([
      [M.ofEuro(1, "€"), M.ofEuro(2, "€"), M.ofEuro(3, "€")],
      [M.ofEuro(10, "€"), M.ofEuro(13, "€"), M.ofEuro(23, "€")],
      [M.ofEuro(20, "€"), M.ofEuro(20, "€"), M.ofEuro(40, "€")],
    ])("should sum correctly", (a, b, expectedResult) => {
      const result = M.Sum.concat(a, b);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });

  describe("SumAll", () => {
    test.each([
      [
        M.ofEuro(1, "€"),
        M.ofEuro(2, "€"),
        M.ofEuro(3, "€"),
        M.ofEuro(4, "€"),
        M.ofEuro(5, "€"),
        M.ofEuro(6, "€"),
        M.ofEuro(21, "€"),
      ],
      [
        M.ofEuro(10, "€"),
        M.ofEuro(13, "€"),
        M.ofEuro(23, "€"),
        M.ofEuro(46, "€"),
      ],
      [
        M.ofEuro(20, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(40, "€"),
        M.ofEuro(80, "€"),
      ],
    ])("should sumAll correctly", (...args) => {
      const [expectedResult] = args.splice(-1, 1);
      const result = M.SumAll(args);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });
});
