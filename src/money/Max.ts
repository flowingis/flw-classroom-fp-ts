import * as Se from "fp-ts/Semigroup";
import { MoneyEuro, ofEuro } from "./model";

export const Max: Se.Semigroup<MoneyEuro> = {
  concat: (x, y) => ofEuro(Math.max(x.amount, y.amount), x.currency),
};

export const MaxAll = Se.concatAll(Max);
