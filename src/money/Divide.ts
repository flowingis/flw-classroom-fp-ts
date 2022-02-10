import * as M from "fp-ts/Magma";
import { MoneyEuro, ofEuro } from "./model";

export const Divide: M.Magma<MoneyEuro> = {
  concat: (x, y) => ofEuro(x.amount / y.amount, x.currency),
};

export const DivideAll: (
  startWith: MoneyEuro
) => (as: readonly MoneyEuro[]) => MoneyEuro = M.concatAll(Divide);
