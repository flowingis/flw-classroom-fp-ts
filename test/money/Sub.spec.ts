import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe.todo("Money Sub", () => {
  describe.todo("Sub", () => {
    test.each([
      [M.ofEuro(2, "€"), M.ofEuro(1, "€"), M.ofEuro(1, "€")],
      [M.ofEuro(10, "€"), M.ofEuro(13, "€"), M.ofEuro(-3, "€")],
      [M.ofEuro(20, "€"), M.ofEuro(20, "€"), M.ofEuro(0, "€")],
    ])("should sub correctly", (a, b, expectedResult) => {
      const result = M.Sub.concat(a, b);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });

  describe.todo("SubAll", () => {
    test.each([
      [
        M.ofEuro(6, "€"),
        M.ofEuro(5, "€"),
        M.ofEuro(4, "€"),
        M.ofEuro(3, "€"),
        M.ofEuro(2, "€"),
        M.ofEuro(1, "€"),
        M.ofEuro(-9, "€"),
      ],
      [
        M.ofEuro(23, "€"),
        M.ofEuro(13, "€"),
        M.ofEuro(10, "€"),
        M.ofEuro(0, "€"),
      ],
      [
        M.ofEuro(50, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(10, "€"),
        M.ofEuro(20, "€"),
      ],
      [
        M.ofEuro(10, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(50, "€"),
        M.ofEuro(-60, "€"),
      ],
    ])("should subAll correctly", (...args) => {
      const [expectedResult] = args.splice(-1, 1);
      const [first, ...rest] = args;
      const result = M.SubAll(first)(rest);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });
});
