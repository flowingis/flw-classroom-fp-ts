import { pipe } from "fp-ts/function";
import * as N from "fp-ts/number";
import { contramap, fromCompare, Ord } from "fp-ts/Ord";
import { MoneyEuro } from "./model";

export const OrdMoney: Ord<MoneyEuro> = fromCompare((first, second) =>
  N.Ord.compare(first.amount, second.amount)
);

export const OrdMoney_: Ord<MoneyEuro> = pipe(
  N.Ord,
  contramap((_: MoneyEuro) => _.amount)
);
