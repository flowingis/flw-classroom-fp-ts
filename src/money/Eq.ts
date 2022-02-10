import { Eq, struct } from "fp-ts/Eq";
import * as N from "fp-ts/number";
import * as S from "fp-ts/string";
import { MoneyEuro } from "./model";

export const EqMoney: Eq<MoneyEuro> = struct({
  amount: N.Eq,
  currency: S.Eq,
});
