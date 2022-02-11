import * as M from "fp-ts/Magma";
import { MoneyEuro, ofEuro } from "./model";

export const Sub: M.Magma<MoneyEuro> = {
  concat: (x, y) => ofEuro(x.amount - y.amount, "€")
};

export const SubAll = M.concatAll(Sub)
