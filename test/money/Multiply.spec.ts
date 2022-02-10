import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe("Money Multiply", () => {
  describe("Multiply", () => {
    test.each([
      [M.ofEuro(1, "€"), M.ofEuro(2, "€"), M.ofEuro(2, "€")],
      [M.ofEuro(10, "€"), M.ofEuro(13, "€"), M.ofEuro(130, "€")],
      [M.ofEuro(20, "€"), M.ofEuro(20, "€"), M.ofEuro(400, "€")],
    ])("should multiply correctly", (a, b, expectedResult) => {
      const result = M.Multiply.concat(a, b);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });

  describe("MultiplyAll", () => {
    test.each([
      [
        M.ofEuro(1, "€"),
        M.ofEuro(2, "€"),
        M.ofEuro(3, "€"),
        M.ofEuro(4, "€"),
        M.ofEuro(5, "€"),
        M.ofEuro(6, "€"),
        M.ofEuro(720, "€"),
      ],
      [
        M.ofEuro(10, "€"),
        M.ofEuro(13, "€"),
        M.ofEuro(23, "€"),
        M.ofEuro(2990, "€"),
      ],
      [
        M.ofEuro(20, "€"),
        M.ofEuro(20, "€"),
        M.ofEuro(40, "€"),
        M.ofEuro(16000, "€"),
      ],
    ])("should multiplyAll correctly", (...args) => {
      const [expectedResult] = args.splice(-1, 1);
      const result = M.MultiplyAll(args);

      expect(M.EqMoney.equals(result, expectedResult)).toBe(true);
    });
  });
});
