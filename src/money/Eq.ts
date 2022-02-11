import { Eq, struct } from "fp-ts/Eq";
import { MoneyEuro } from "./model";
import * as N from "fp-ts/number";
import * as S from "fp-ts/string";

/*export const EqMoney: Eq<MoneyEuro> = {
  equals: (x, y) => x.amount === y.amount && x.currency === y.currency
}*/

export const EqMoney: Eq<MoneyEuro> = struct({
  amount: N.Eq,
  currency: S.Eq
})
