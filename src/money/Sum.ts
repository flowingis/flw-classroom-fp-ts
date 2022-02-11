import { Monoid, concatAll } from "fp-ts/Monoid";
import { MoneyEuro, ofEuro } from "./model";

export const Sum: Monoid<MoneyEuro> = {
  empty: ofEuro(0, "€"),
  concat: (x, y) => ofEuro(x.amount + y.amount, x.currency)
}

export const SumAll = concatAll(Sum)
