import { describe, expect, test } from "vitest";
import * as M from "../../src/money";

describe("Money Eq", () => {
  test.each([
    [M.ofEuro(1, "€"), M.ofEuro(1, "€")],
    [M.ofEuro(10, "€"), M.ofEuro(10, "€")],
    [M.ofEuro(20, "€"), M.ofEuro(20, "€")],
  ])("should are equals", (a, b) => {
    expect(M.EqMoney.equals(a, b)).toBe(true);
  });

  test.each([
    [M.ofEuro(1, "€"), M.ofEuro(10, "€")],
    [M.ofEuro(11, "€"), M.ofEuro(100, "€")],
    [M.ofEuro(200, "€"), M.ofEuro(20, "€")],
  ])("should are not equals", (a, b) => {
    expect(M.EqMoney.equals(a, b)).toBe(false);
  });
});
