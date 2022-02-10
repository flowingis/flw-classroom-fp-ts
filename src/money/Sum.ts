import { concatAll, Monoid, struct } from "fp-ts/Monoid";
import * as N from "fp-ts/number";
import { MoneyEuro } from "./model";

const MonoidCurrency = <C>(currency: C): Monoid<C> => ({
  concat: () => currency,
  empty: currency,
});

export const Sum: Monoid<MoneyEuro> = struct({
  amount: N.MonoidSum,
  currency: MonoidCurrency("€"),
});

export const SumAll = concatAll(Sum);
