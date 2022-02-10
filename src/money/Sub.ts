import * as M from "fp-ts/Magma";
import { MoneyEuro, ofEuro } from "./model";

export const Sub: M.Magma<MoneyEuro> = {
  concat: (x, y) => ofEuro(x.amount - y.amount, x.currency),
};

export const SubAll: (
  startWith: MoneyEuro
) => (as: readonly MoneyEuro[]) => MoneyEuro = M.concatAll(Sub);
