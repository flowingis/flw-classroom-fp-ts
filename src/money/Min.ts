import * as Se from "fp-ts/Semigroup";
import { MoneyEuro } from "./model";

export declare const Min: Se.Semigroup<MoneyEuro>;

export declare const MinAll: <MoneyEuro>(
  S: Se.Semigroup<MoneyEuro>
) => (startWith: MoneyEuro) => (as: readonly MoneyEuro[]) => MoneyEuro;
