import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe.todo("Money Max", () => {
  describe.todo("Max", () => {
    test.each([
      [M.ofEuro(1, "€"), M.ofEuro(1, "€"), M.ofEuro(1, "€")],
      [M.ofEuro(10, "€"), M.ofEuro(20, "€"), M.ofEuro(20, "€")],
      [M.ofEuro(40, "€"), M.ofEuro(20, "€"), M.ofEuro(40, "€")],
    ])("should are min", (a, b, expectedMax) => {
      const min = M.Max.concat(a, b);
      expect(M.EqMoney.equals(min, expectedMax)).toBe(true);
    });
  });

  describe.todo("MaxAll", () => {
    test.each([
      [M.ofEuro(1, "€"), M.ofEuro(3, "€"), M.ofEuro(4, "€"), M.ofEuro(4, "€")],
      [
        M.ofEuro(10, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(30, "€"),
        M.ofEuro(40, "€"),
        M.ofEuro(40, "€"),
      ],
      [
        M.ofEuro(40, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(800, "€"),
        M.ofEuro(200, "€"),
        M.ofEuro(800, "€"),
      ],
    ])("should are min", (...args) => {
      const { length, 0: startWith, [length - 1]: expectedMax } = args;
      const as = args.slice(1, length - 1);
      const min = M.MaxAll(startWith)(as);
      expect(M.EqMoney.equals(min, expectedMax)).toBe(true);
    });
  });
});
