import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe.todo("Money Min", () => {
  describe.todo("Min", () => {
    test.each([
      [M.ofEuro(1, "€"), M.ofEuro(1, "€"), M.ofEuro(1, "€")],
      [M.ofEuro(10, "€"), M.ofEuro(20, "€"), M.ofEuro(10, "€")],
      [M.ofEuro(40, "€"), M.ofEuro(20, "€"), M.ofEuro(20, "€")],
    ])("should are min", (a, b, expectedMin) => {
      const min = M.Min.concat(a, b);
      expect(M.EqMoney.equals(min, expectedMin)).toBe(true);
    });
  });

  describe.todo("MinAll", () => {
    test.each([
      [M.ofEuro(1, "€"), M.ofEuro(3, "€"), M.ofEuro(4, "€"), M.ofEuro(1, "€")],
      [
        M.ofEuro(10, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(30, "€"),
        M.ofEuro(40, "€"),
        M.ofEuro(10, "€"),
      ],
      [
        M.ofEuro(40, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(800, "€"),
        M.ofEuro(200, "€"),
        M.ofEuro(20, "€"),
      ],
    ])("should are min", (...args) => {
      const { length, 0: startWith, [length - 1]: expectedMin } = args;
      const as = args.slice(1, length - 1);
      const min = M.MinAll(startWith)(as);
      expect(M.EqMoney.equals(min, expectedMin)).toBe(true);
    });
  });
});
