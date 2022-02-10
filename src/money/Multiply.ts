import * as M from "fp-ts/Monoid";
import * as N from "fp-ts/number";
import * as Se from "fp-ts/Semigroup";
import { MoneyEuro, ofEuro } from "./model";

const MultiplySemiGroup: Se.Semigroup<MoneyEuro> = Se.struct({
  amount: N.SemigroupProduct,
  currency: Se.constant("€"),
});

export const Multiply: M.Monoid<MoneyEuro> = {
  concat: MultiplySemiGroup.concat,
  empty: ofEuro(1, "€"),
};

export const MultiplyAll = M.concatAll(Multiply);
