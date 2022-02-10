import * as Se from "fp-ts/Semigroup";
import { MoneyEuro, ofEuro } from "./model";

export const Min: Se.Semigroup<MoneyEuro> = {
  concat: (x, y) => ofEuro(Math.min(x.amount, y.amount), x.currency),
};

export const MinAll = Se.concatAll(Min);
